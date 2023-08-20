<template>
    <li v-bind:style="{ backgroundColor: object.color }" class="item">
        <div v-bind:id="object.name + 'item'" class=" item__anim__container item__close">
            <div class="item__container">
                <div class="text__container">
                    <span class="item__text">name : {{ object.name }}</span>
                    <span class="item__text">value : {{ object.value }}</span>
                </div>
                <button class="item__button" @click="openForm(object.name)">
                    <img class="item__icon" src="/list_icon.svg " alt="change icon">
                </button>
            </div>
            <form class="item__form" v-bind:id="object.name"
                @submit.prevent="$emit('change-value', object.name, this.input)">
                <input class="form__input" type="text" v-model="input" />
                <button class="form__button" type="submit">Change</button>
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
            input: 'Enter new value'
        }
    },

}

</script>
<script setup>
function openForm(id) {
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

    .item__text:last-child {
        font-size: 24px;
    }

    .item__form {
        max-width: 400px;

        padding: 30px;
        gap: 20px;

    }

    .form__input {
        width: 291px;
        height: 150px;
        padding: 8px 16px;

        font-size: 24px;
    }

    .form__button {
        width: 323px;
        height: 50px;

        font-size: 18px;

    }

    @keyframes increase {
        from {
            height: 72px;
        }

        to {
            height: 385px;
        }
    }

    @keyframes decrease {
        from {
            height: 385px;
        }

        to {
            height: 72px;
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
    flex-direction: column;

}

.item__text {
    color: #333;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
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
    transform: rotate(-90deg);
}

.item__form {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 10px 30px 3px rgba(0, 0, 0, 0.15);

}

.form__open {
    display: flex;
}

.form__input {
    display: flex;
    border-radius: 4px;
    border: 1px solid #DDD;
    background: #FFF;

    color: #DDD;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    line-height: 150.5%;
}

.form__input:focus {
    border: 1px solid #DDD;
    color: #333;
}

.form__close:is(:hover, :focus) .close__img {
    opacity: 100%;
}

.form__button {
    cursor: pointer;

    border-radius: 15px;
    background: rgba(228 228 228 / 70%);
    border: none;

    color: #333;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: 150.5%;
}

.form__button:is(:hover, :focus) {
    background: rgb(222, 222, 222);
}
</style>
