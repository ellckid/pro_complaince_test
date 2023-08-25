<template>
    <div class="list__container">
        <div class="list__headings">
            <h1 class="list__h1">Список продуктов</h1>
            <button class="list__addbtn" @click="addObject()"><img class="list__addbtn_img" src="/plus.svg"></button>
        </div>

        <ul class="list">
            <ObjectItem v-if="objects.length" v-for=" object of   objects  " v-bind:object="object"
                v-on:remove-object="removeObject" v-on:change-value="changeValue" v-on:sort-objects="sortedList"
                v-on:change-color="changeColor" :key="object.id" />
            <hr>
            <ObjectItem v-if="completedObjects.length" v-for=" object of   completedObjects " v-bind:object="object"
                v-on:remove-object="removeObject" v-on:change-value="changeValue" v-on:sort-objects="sortedList"
                :key="object.id" />
            <span class="list__warning" v-else-if="!completedObjects.length && !objects.length">В списке нет
                продуктов(</span>
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
        changeColor(id, color) {
            this.objects.forEach(el => {
                if (el.id === id) {
                    el.color = color
                    this.saveData()
                }
            })

        },
        changeValue(id, value) {
            this.objects.forEach(el => {
                if (el.id === id) {
                    el.name = value
                    this.saveData()
                }
            })
        },
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
        },
        removeObject(id) {
            this.objects = this.objects.filter(el => el.id !== id)
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

.list__warning {
    color: #333;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
</style>
