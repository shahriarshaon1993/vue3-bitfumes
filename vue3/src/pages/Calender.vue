<template>
    <div class="m-auto">
        <h1 class="text-3xl mb-5 text-center">Vue Calender</h1>
        <section class="flex justify-between mx-2">
            <h2 class="font-bold">{{ currentMonthName }}</h2>
            <h2 class="font-bold">{{ currentYear }}</h2>
        </section>
        <section class="flex">
            <p 
                class="text-center" 
                style="width: 14.28%" 
                v-for="day in days" :key="day"
            >
                {{ day }}
            </p>
        </section>
        <section class="flex flex-wrap">
            <p 
                class="text-center" 
                style="width: 14.28%" 
                v-for="num in startDay()" :key="num"
            ></p>
            <p 
                class="text-center" 
                style="width: 14.28%" 
                v-for="num in daysInMonth()" :key="num"
                :class="currentDateClass(num)"
            >
                {{ num }}
            </p>
        </section>
        <section class="flex justify-between my-4">
            <button 
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs py-1 px-2 rounded-l"
                @click="prev"
            >
                Prev
            </button>
            <button 
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs py-1 px-2 rounded-r"
                @click="next"
            >
                Next
            </button>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear(),
            currentMonth: new Date().getMonth(),
            currentDate: new Date().getUTCDate(),
            days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        }
    },
    methods: {
        daysInMonth() {
            return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        },
        startDay() {
            return new Date(this.currentYear, this.currentMonth, 1).getDay();
        },
        next() {
            if(this.currentMonth === 11) {
                this.currentMonth = 0;
                this.currentYear++;
            }else {
                this.currentMonth++;
            }
        },
        prev() {
            if(this.currentMonth === 0) {
                this.currentMonth = 11;
                this.currentYear--;
            }else {
                this.currentMonth--;
            }
        },
        currentDateClass(number) {
            const calenderFullDate = new Date(
                this.currentYear, 
                this.currentMonth, 
                number
            ).toDateString();
            const currentFullDate = new Date().toDateString();

            return calenderFullDate === currentFullDate ? 'text-yellow-600' : '';
        }
    },
    computed: {
        currentMonthName() {
            return new Date(
                this.currentYear,
                this.currentMonth
            ).toLocaleString("default", {month: "long"});
        }
    }
}
</script>

<style>

</style>