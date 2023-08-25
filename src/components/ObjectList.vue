<template>
    <div class="list__container">
        <div class="list__headings">
            <h1 class="list__h1">Список продуктов</h1>
            <button class="list__addbtn" @click="addObject()"><img class="list__addbtn_img" src="/plus.svg"></button>
        </div>

        <ul class="list">
            <ObjectItem v-if="objects.length" v-for=" object of   objects  " v-bind:object="object"
                v-on:remove-object="removeObject" v-on:change-value="changeValue" v-on:sort-objects="sortedList"
                :key="object.id" />
            <hr>
            <ObjectItem v-if="completedObjects.length" v-for=" object of   completedObjects " v-bind:object="object"
                v-on:remove-object="removeObject" v-on:change-value="changeValue" v-on:sort-objects="sortedList"
                :key="object.id" />
        </ul>
    </div>
</template>
<script >
import ObjectItem from '../components/ObjectItem.vue'
export default {
    components: {
        ObjectItem
    },
    data() {
        return {
            objects:
                [

                    { id: 0, name: 'Колбаса', color: '#F4E0F9', checked: false },
                    { id: 1, name: 'Яйца', color: '#E3E0F9', checked: false },
                    { id: 2, name: 'Молоко', color: '#E0EAF9', checked: false }
                ],
            completedObjects: []
        }

    },
    mounted() {
        if (localStorage.getItem('objects')) {
            try {
                this.objects = JSON.parse(localStorage.getItem('objects'))
            } catch (e) {
                localStorage.removeItem('objects')
            }
        }
        if (localStorage.getItem('completed')) {
            try {
                this.completedObjects = JSON.parse(localStorage.getItem('completed'))
            } catch (e) {
                localStorage.removeItem('completed')
            }
        }
    },
    methods: {
        sortedList(id, stat) {
            console.log(id)
            console.log(stat)

            if (stat == true) {
                this.objects.forEach(el => {
                    if (el.id == id) {
                        this.completedObjects.push(el)
                        this.objects.splice(this.objects.indexOf(el), 1)
                    }
                })
                console.log(this.objects)
                console.log(this.completedObjects)
            }

            if (stat == false) {
                console.log('значение false')
                this.completedObjects.forEach(el => {
                    if (el.id == id) {
                        console.log('id элемента = ' + el.id)
                        this.objects.push(el)
                        this.completedObjects.splice(this.completedObjects.indexOf(el), 1)
                    }
                })
                console.log(this.objects)
                console.log(this.completedObjects)
            }

            this.saveData()


            // for (let i = 0; i < this.objects.length; i++) {
            //     if (this.objects[i].id == id) {
            //         console.log(this.objects)
            //         console.log(this.completedObjects)
            //         if (this.objects.includes(this.objects[i])) {
            //             this.objects.splice(i, 1)
            //             this.completedObjects.push(this.objects[i])
            //             console.log('элемент ' + this.objects[i].name + " " + i + ' выбран и должен быть внизу')
            //         }
            //     }
            // }



            // this.objects.forEach(el => {
            //     if (el.id === id) {
            //         if (stat === true) {
            //             this.objects.filter(el => el.checked === true)
            //             this.objects.splice(this.objects.indexOf(el), 1)
            //             this.completedObjects.push(el)
            //         }
            //     }
            // })

            // this.completedObjects.forEach(el => {
            //     if (el.id === id) {
            //         if (stat === false) {
            //             this.completedObjects.filter(el => el.checked === false)
            //             this.completedObjects.splice(this.completedObjects.indexOf(el), 1)
            //             this.objects.push(el)
            //         }
            //     }
            // })

            // this.objects.forEach(el => {
            //     if (stat === true) {
            //         const completeMask = this.objects.splice(this.objects.indexOf(el), 1)
            //         this.completedObjects.push(...completeMask)
            //     }
            // })
            // this.objects.forEach(el => {
            //     if (stat === true) {
            //         const notCompleteMask = this.completedObjects.splice(this.completedObjects.indexOf(el), 1)
            //         this.objects.push(...notCompleteMask)
            //         console.log(...notCompleteMask)
            //     }
            // })

            // if (stat == true) {
            //     const completeMask = this.objects.splice(el => el.id === id, 1)
            //     this.completedObjects.push(...completeMask)
            //     console.log(this.objects)
            //     console.log(this.completedObjects)
            // }
            // if (stat == false) {
            //     const notCompleteMask = this.completedObjects.splice(el => el.id === id, 1)
            //     this.objects.push(...notCompleteMask)
            //     console.log(this.objects)
            //     console.log(this.completedObjects)
            // }

            // if (stat == false) {
            //     let res = []
            //     this.completedObjects.forEach(el => {
            //         if (el.checked == false) {
            //             res.push(el)
            //         }
            //     })
            //     this.objects = res
            //     console.log(this.objects)
            //     console.log(this.completedObjects)
            // }

            // this.completedObjects.forEach(el => {
            //     if (el.id === id) {
            //         if (stat === false) {
            //             this.completedObjects.filter(el => el.checked === false)
            //             this.completedObjects.splice(this.completedObjects.indexOf(el), 1)
            //             this.objects.push(el)
            //         }
            //     }
            // })
        },
        removeObject(id) {
            this.objects = this.objects.filter(el => el.id !== id)
            this.saveData()
        },
        changeValue(id, new_value) {
            console.log(id)
            console.log(new_value)
            this.objects.map((e) => {
                if (new_value.trim()) {
                    if (e.id === id) {
                        e.value = new_value
                    }
                }

            })
            this.saveData()
        },
        findNewId() {
            let idPool = []
            this.objects.forEach(el => {
                idPool.push(el.id)
            })
            let newId = Math.random()
            console.log(newId)
            if (idPool.includes(newId)) {
                newId = Math.random()
            }
            return newId

        },
        addObject() {
            console.log(localStorage.getItem('objects'))
            const newObject = {
                id: this.findNewId(),
                name: 'Новый продукт',
                color: '#F8F8F8',
                checked: false
            }
            this.objects.push(newObject)
            console.log(this.objects)
            this.saveData()
        },
        saveData() {
            localStorage.setItem('completed', JSON.stringify(this.completedObjects))
            localStorage.setItem('objects', JSON.stringify(this.objects))
        }
    }

}
</script>

<style>
@media (min-width: 768px) {
    .list__container {
        gap: 50px;
        padding: 40px;

        width: 80%;
        max-width: 1000px;
    }

    .list__h1 {
        font-size: 40px;
    }

    .list {
        gap: 30px;
    }
}

@media (max-width: 767px) {
    .list__container {
        gap: 30px;
        padding: 40px 20px;

        width: 90%;

    }

    .list__h1 {
        font-size: 36px;
    }

    .list {
        gap: 20px;
    }
}

.list__container {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 10px 30px 3px rgba(0 0 0 / 15%);
}

.list__headings {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.list__addbtn {
    cursor: pointer;
    appearance: none;
    border: none;
    background: none;
}

.list__addbtn:is(:hover, :focus) .list__addbtn_img {
    opacity: 70%;
}

.list__addbtn_img {
    width: fit-content;
    height: 40px;
}

.list__h1 {
    margin: 0;

    color: #333;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.list {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
}
</style>
