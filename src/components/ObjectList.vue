<template>
    <div class="list__container">
        <h1 class="list__h1">Objects</h1>
        <ul class="list">
            <ObjectItem v-for=" object of   objects  " v-bind:object="object" v-on:change-value="changeValue" />
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
                { name: 'foo1', value: 'bar1', color: '#F4E0F9' },
                { name: 'foo2', value: 'bar2', color: '#E3E0F9' },
                { name: 'foo3', value: 'bar3', color: '#E0EAF9' },
                { name: 'foo4', value: 'bar4', color: '#E0F4F9' },
                { name: 'foo5', value: 'bar5', color: '#E0F9F0' },
                { name: 'foo6', value: 'bar6', color: '#E0F9E2' },
                { name: 'foo7', value: 'bar7', color: '#F1F9E0' },
                { name: 'foo8', value: 'bar8', color: '#F8F9E0' },
                { name: 'foo9', value: 'bar9', color: '#F9F3E0' },
                { name: 'foo10', value: 'bar10', color: '#F9ECE0' },
                { name: 'foo11', value: 'bar11', color: '#F9E4E0' },
                { name: 'foo12', value: 'bar12', color: '#F9E0E0' },
                { name: 'foo13', value: 'bar13', color: '#F4E0F9' },
                { name: 'foo14', value: 'bar14', color: '#E3E0F9' },
                { name: 'foo15', value: 'bar15', color: '#E0EAF9' },
                { name: 'foo16', value: 'bar16', color: '#E0F4F9' },
                { name: 'foo17', value: 'bar17', color: '#E0F9F0' },
                { name: 'foo18', value: 'bar18', color: '#E0F9E2' },
                { name: 'foo19', value: 'bar19', color: '#F1F9E0' },
                { name: 'foo20', value: 'bar20', color: '#F8F9E0' }
            ]
        }
    },
    methods: {
        changeValue(id, new_value) {
            console.log(id)
            console.log(new_value)
            this.objects.map((e) => {
                if (new_value.trim()) {
                    if (e.name === id) {
                        e.value = new_value
                    }
                }

            })
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
