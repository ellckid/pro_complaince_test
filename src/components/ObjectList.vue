<template>
    <div class="list__container">
        <div class="list__headings">
            <h1 class="list__h1">Список продуктов</h1>
            <button class="list__addbtn" @click="addObject()"><img class="list__addbtn_img" src="/plus.svg"></button>
        </div>

        <ul class="list">
            <ObjectItem v-if="objects.length" v-for=" object of   objects  " v-bind:object="object"
                v-on:remove-object="removeObject" v-on:change-value="changeValue" />
            <span v-else="" class="list__warning">В списке нет продуктов (</span>
        </ul>
    </div>
</template>

<script>
import ObjectItem from '../components/ObjectItem.vue'
export default {
    components: {
        ObjectItem
    },
    data() {
        return {
            objects: [
                { id: 1, name: 'Колбаса', color: '#F4E0F9', checked: false },
                { id: 2, name: 'Яйца', color: '#E3E0F9', checked: false },
                { id: 3, name: 'Молоко', color: '#E0EAF9', checked: false }
            ]
        }
    },
    methods: {
        removeObject(id) {
            this.objects = this.objects.filter(el => el.id !== id)
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

            const newObject = {
                id: this.findNewId(),
                name: 'Новый продукт',
                color: '#F8F8F8',
                checked: false
            }
            this.objects.push(newObject)
            console.log(this.objects)
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

.list__warning {
    color: #333;
    font-family: Inter;
    font-size: 24px;
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
