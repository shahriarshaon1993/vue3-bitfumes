<template>
    <div class="m-auto">
        <h1 class="text-2xl text-center">Calculator</h1>

        <p class="text-3xl text-right mt-5 mb-2 w-48 h-12 overflow-x-scroll" style="direction: rtl;">
            {{ currentNumber }}
        </p>

        <div class="h-10"> 
            <small v-if="selectedOperation">
                {{ prevNum }} {{ selectedOperation }} {{ currentNumber }}
            </small>
        </div>

        <div class="grid grid-cols-4 gap-1">
            <button @click="pressed('1')" class="p-2 w-10 h-10 border rounded shadow">1</button>
            <button @click="pressed('2')" class="p-2 w-10 h-10 border rounded shadow">2</button>
            <button @click="pressed('3')" class="p-2 w-10 h-10 border rounded shadow">3</button>
            <button @click="pressed('+')" class="p-2 w-10 h-10 border rounded shadow">+</button>
            <button @click="pressed('4')" class="p-2 w-10 h-10 border rounded shadow">4</button>
            <button @click="pressed('5')" class="p-2 w-10 h-10 border rounded shadow">5</button>
            <button @click="pressed('6')" class="p-2 w-10 h-10 border rounded shadow">6</button>
            <button @click="pressed('-')" class="p-2 w-10 h-10 border rounded shadow">-</button>
            <button @click="pressed('7')" class="p-2 w-10 h-10 border rounded shadow">7</button>
            <button @click="pressed('8')" class="p-2 w-10 h-10 border rounded shadow">8</button>
            <button @click="pressed('9')" class="p-2 w-10 h-10 border rounded shadow">9</button>
            <button @click="pressed('*')" class="p-2 w-10 h-10 border rounded shadow">*</button>
            <button @click="pressed('c')" class="p-2 w-10 h-10 border rounded shadow">C</button>
            <button @click="pressed('0')" class="p-2 w-10 h-10 border rounded shadow">0</button>
            <button @click="pressed('=')" class="p-2 w-10 h-10 border rounded shadow">=</button>
            <button @click="pressed('/')" class="p-2 w-10 h-10 border rounded shadow">/</button>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import useWindowEvent from "../utilities/composition/useWindowEvent"

export default {
    setup() {
        const operations = ["+", "-", "*", "/"];
        const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        const currentNumber = ref("");
        const prevNum = ref("");
        const selectedOperation = ref("");

        function pressed(value) {
            if (value === "=" || value === "Enter") calculate();
            else if (value === "c") clear();
            else if (operations.includes(value)) applyOperation(value);
            else if (numbers.includes(value)) apprendNumber(value);
        }

        function apprendNumber(value) {
            currentNumber.value = currentNumber.value + value;
        }

        function applyOperation(value) {
            calculate();
            prevNum.value = currentNumber.value;
            currentNumber.value = "";
            selectedOperation.value = value;
        }

        function calculate() {
            if (selectedOperation.value === "*") multiply();
            else if (selectedOperation.value === "/") divide();
            else if (selectedOperation.value === "-") subtract();
            else if (selectedOperation.value === "+") sum();

            prevNum.value = "";
            selectedOperation.value = "";
        }

        function multiply() {
            currentNumber.value = prevNum.value * currentNumber.value;
        }

        function divide() {
            currentNumber.value = prevNum.value / currentNumber.value;
        }

        function subtract() {
            currentNumber.value = prevNum.value - currentNumber.value;
        }

        function sum() {
            currentNumber.value = +prevNum.value + +currentNumber.value;
        }

        function clear() {
            currentNumber.value = "";
        }

        const handleKeydown = (e) => pressed(e.key);

        useWindowEvent("keydown", handleKeydown);

        return {
            selectedOperation,
            currentNumber,
            pressed,
            prevNum
        }
    }
}
</script>

<style>

</style>