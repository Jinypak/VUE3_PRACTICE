import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks:[],
        loading: false
    }),
    getters: {
        impos(){
            return this.tasks.filter(t => t.isImpo)
        },
        imporsCount() {
            return this.tasks.reduce((p, c) => {
                return c.isImpo ? p + 1 : p
            }, 0)
        },
        totalCount: (state) => {
            return state.tasks.length
        }
    },
    actions: {
        async getTasks() {
            this.loading = true

            const res = await fetch('http://localhost:3000/tasks')
            const data = await res.json()

            this.tasks = data
            this.loading = false
        },
        async addTask(task) {
            this.tasks.push(task)

            const res = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                body: JSON.stringify(task),
                headers: {'Content-Type': 'application/json'}
            })

            if (res.error) {
                console.log(res.error)
            }
        },
        async deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })

            const res = await fetch('http://localhost:3000/tasks/' + id, {
                method: 'DELETE',
            })

            if (res.error) {
                console.log(res.error)
            }
        },
        async toggleImpo(id) {
            const task = this.tasks.find(t => t.id === id)
            task.isImpo = !task.isImpo

            const res = await fetch('http://localhost:3000/tasks/' + id, {
                method: 'PATCH',
                body: JSON.stringify({ isImpo: task.isImpo }),
                headers: {'Content-Type': 'application/json'}
            })

            if (res.error) {
                console.log(res.error)
            }
        }
    }

})