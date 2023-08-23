<template>
    <!--  -->
    <li v-bind:style="{ backgroundColor: object.color }" class="item">
        <div v-bind:id="object.id + 'item'" class=" item__anim__container item__close">
            <div class="item__container">
                <div class="text__container">
                    <input type="checkbox" class="item__checkbox" v-on:change="object.checked = !object.checked"
                        v-model="checked">
                    <span class="item__checkbox_img" v-bind:class="{ img_done: object.checked }"> </span>
                    <input type="text" class="item__text" v-model="input"
                        v-on:change="$emit('change-value', object.id, this.input)" v-bind:class="{ done: object.checked }">
                </div>
                <button class=" item__button" @click="openForm(object.id)">
                    <img class="item__icon" src="/down_icon.svg " alt="change icon">
                </button>
            </div>
            <form class="item__form" v-bind:id="object.id">
                <div class="item__color_container">
                    <button class="item__color_btn" @click="object.color = '#F8F8F8'"></button>
                    <button class="item__color_btn" @click="object.color = '#F9E0E0'"></button>
                    <button class="item__color_btn" @click="object.color = '#F9EFE0'"></button>
                    <button class="item__color_btn" @click="object.color = '#EBF9E0'"></button>
                    <button class="item__color_btn" @click="object.color = '#E0F9EA'"></button>
                    <button class="item__color_btn" @click="object.color = '#E0F6F9'"></button>
                    <button class="item__color_btn" @click="object.color = '#E0E5F9'"></button>
                </div>
                <button class="form__button" v-on:click="$emit('remove-object', object.id)"><img class="form__button_img"
                        src="/cross.svg"></button>
            </form>
        </div>
    </li>
</template>
<script >
export default {
    props: {
        object: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            input: this.object.name,
            checked: this.object.checked
        }
    },
    watch: {
        checked() {
            this.$emit('sort-objects', this.object.id, this.checked)
        }
    }

}


</script>
<script setup>
function openForm(id) {
    // можно переделать через refs

    document.getElementById(id).classList.toggle('form__open')
    document.getElementById(id + 'item').classList.toggle('item__open')
    document.getElementById(id + 'item').classList.toggle('item__close')


}
</script>
<style >
@media (min-width: 768px) {
    .item {
        padding: 20px 40px;
    }

    .text__container {
        gap: 8px;
        max-width: 60%;
        word-wrap: break-word;
    }

    .item__text {
        font-size: 28px;
    }

    .item__form {

        padding: 30px;
        gap: 20px;

    }

    .form__button {
        width: fit-content;
    }

    @keyframes increase {
        from {
            height: 35px;
        }

        to {
            height: 150px;
        }
    }

    @keyframes decrease {
        from {
            height: 150px;
        }

        to {
            height: 35px;
        }
    }
}

@media (max-width: 767px) {
    .item {
        padding: 20px;
    }

    .text__container {
        gap: 5px;
        max-width: 180px;
        word-wrap: break-word;
    }

    .item__text {
        font-size: 24px;
    }

    .item__text:last-child {
        font-size: 20px;
    }

    .item__form {
        width: 100%;
        gap: 20px;

        padding: 20px;

    }

    .form__input {
        width: 100%;
        height: 150px;
        padding: 8px 16px;

        font-size: 20px;
    }

    .form__button {
        width: 100%;
        height: 50px;

        font-size: 14px;

    }

    @keyframes increase {
        from {
            height: 59px;
        }

        to {
            height: 345px;
        }
    }

    @keyframes decrease {
        from {
            height: 345px;
        }

        to {
            height: 59px;
        }
    }
}

.item {
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0 0 0 /25%) inset;
}



.item__anim__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
}

.item__open {
    animation: increase 0.1s linear 1;
    animation-direction: alternate;
    animation-fill-mode: both;
}

.item__close {
    animation: decrease 0.1s linear 1;
    animation-direction: alternate;
    animation-fill-mode: both;
}

.item__container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
}

.text__container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;

}

.item__text {
    color: #333;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 50px;

    background: transparent;
}


.item__checkbox {
    -webkit-appearance: none;
    position: absolute;
    width: 30px;
    height: 30px;
    cursor: pointer;
    z-index: 1;
    outline: none;
    border: none;
}

.item__checkbox_img {
    position: absolute;
    display: flex;
    box-sizing: content-box;
    margin-right: 20px;
    width: 31px;
    height: 31px;
    background: url('/notdone_icon.svg');
    background-repeat: no-repeat;
}

.img_done {
    background: url('/ddone_icon.svg');
    background-repeat: no-repeat;
}

.done {
    text-decoration: line-through;
}

.item__button {
    cursor: pointer;
    border: none;
    appearance: none;
    background-color: transparent;
    z-index: 1;
}

.item__icon {
    height: 35px;
    transition: all 0.1s linear;
    z-index: 0;
}

.item__button:is(:hover, :focus) .item__icon {
    transform: rotate(90deg);
}

.item__form {
    display: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 10px 30px 3px rgba(0 0 0 /15%);
}

.item__color_container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
}

.item__color_btn {
    width: 30px;
    height: 30px;

    border-radius: 50px;
    box-shadow: 0px 4px 4px 0px rgba(0 0 0 /25%);
}

.item__color_btn:nth-child(1) {
    background: #F8F8F8;
}

.item__color_btn:nth-child(2) {
    background: #F9E0E0;
}

.item__color_btn:nth-child(3) {
    background: #F9EFE0;
}

.item__color_btn:nth-child(4) {
    background: #EBF9E0;
}

.item__color_btn:nth-child(5) {
    background: #E0F9EA;
}

.item__color_btn:nth-child(6) {
    background: #E0F6F9;
}

.item__color_btn:nth-child(7) {
    background: #E0E5F9;
}

.item__color_btn:is(:hover, :focus) {
    border: 2px solid #A6A6A6;
}

.form__open {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.form__close:is(:hover, :focus) .close__img {
    opacity: 100%;
}

.form__button {
    cursor: pointer;
    background: transparent;
    border: none;
}

.form__button:is(:hover, :focus) .form__button_img {
    opacity: 70%;
}
</style>
