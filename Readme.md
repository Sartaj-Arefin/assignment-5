1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer-
getElementById,getElementsByClassName
১। getElementById একটি নির্দিষ্ট ID এর উপাদান খুঁজে দেয়।
সেখানে getElementsByClassName একটি নির্দিষ্ট class এর সব উপাদান খুঁজে বের করে দেয়।

querySelector / querySelectorAll
১। querySelector প্রথম element ম্যাচ করে।
সেখানে querySelectorAll সব element ম্যাচ করে।

2. How do you create and insert a new element into the DOM?
   create
   const newDiv = document.createElement("div");

   insert
   const container = document.getElementById("container");
   container.appendChild(newDiv);

3. What is Event Bubbling and how does it work?

ইভেন্ট বাবলিং হলো DOM-এ ইভেন্টের propagation প্রক্রিয়া। যখন একটি child element এ ইভেন্ট ঘটে তখন সেটি parent element পর্যন্ত যেতে থাকে যতক্ষণ না document এর root পৌঁছায়।

4. What is Event Delegation in JavaScript? Why is it useful?

ইভেন্ট ডেলিগেশন হলো এমন একটি পক্রিয়া যেখানে child element এর পরিবর্তে parent element এ Event listener বসানো হয়। পরে parent element চেক করে বোঝে কোন child element এ ইভেন্ট ঘটেছে।

useful
অনেক child element এ আলাদা listener না বসিয়ে, parent এ একবার listener বসালেই হয়।
কোড ছোট এবং পরিষ্কার থাকে।

5. What is the difference between preventDefault() and stopPropagation() methods?

একটি batton এ ক্লিক করলে পেজ reload হয়ে যায় সাথে সাথে preventDefault() এটাতে বাধা দেয়।

stopPropagation() ইভেন্টকে parent elements পর্যন্ত বাবল হতে বাধা দেয়।
