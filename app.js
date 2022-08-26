/*
আজকের মডিউল থেকে নিচের তিনটা জিনিস মাস্ট বুঝে নিবে 

১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় 

২. টেম্পলেট স্ট্রিং এর মধ্যে ডাইনামিক ভাবে কিভাবে কোন একটা ভেরিয়েবলকে বসানো যায় 

৩. একটা প্যারামিটার ওয়ালা arrow ফাংশন কিভাবে ডিক্লেয়ার করতে হয়। 

.

নিচের তিনটা জিনিস বুঝে নিতে পারলে ফিউচারে কাজে লাগবে 

১. কিভাবে থ্রি ডট দিয়ে (...) একটা এরে এর সব এলিমেন্ট বসিয়ে দেয়া যায় 

২. কোন একটা ফাংশনে এর প্যারামিটার ভ্যালু না দিলে কিভাবে ডিফল্ট প্যারামিটার দিতে হয় 

৩. অনেক লাইন ওয়ালা arrow ফাংশন কিভাবে লিখতে হয়। আর কিভাবে সেটা থেকে রিটার্ন করতে হয় 

ব্যস, এই টুকুই। 

আজকে কোন কোন জিনিস খেয়াল করবে 

১. nested অবজেক্ট (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। সেটা খেয়াল করতে হবে )

২. ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু খেয়াল করতে হবে। 



যে জিনিসগুলা এখন না লাগলেও দুই-তিন সপ্তাহ পরে লাগবে। তখন আবার এই জিনিসগুলো নিয়ে আলোচনা করবো। তবে এখন একটু দেখে রাখলে তখন ইজি লাগবে। 

৩. array এর মধ্যে map কিভাবে করতে হয়। 

৪. array এর মধ্যে forEach কিভাবে করে। এবং map এর forEach এর মধ্যে ডিফারেন্স কি

৫. filter জিনিসটা দিয়ে কি করা হয়। ফিল্টার যে array রিটার্ন করে সেটা ফিউচারের জন্য খেয়াল রাখতে হবে 

৬. find এবং filter এর মধ্যে ডিফারেন্স কি ? 

৭. অবজেক্ট এর সিম্পল destructuring কিভাবে করে ?

৮. array এর সিম্পল destructuring কিভাবে করে ?



যে জিনিসগুলো এখন জাস্ট ধারণা রেখে দাও। বুঝতে পারলে ভালো। না বুঝতে পারলেও কোন সমস্যা নাই। আমাদের এই কোর্স এ তেমন লাগবে না। তবে মাঝে মধ্যে ইন্টারভিউতে লেগে যেতে পারে। বা কিছুদিন পরে লেগে যেতেও পারে। 

৯. class কিভাবে ডিক্লেয়ার করে 

১০. inheritance কি জিনিস 

১১. prototypical inheritance এর কনসেপ্টটা কি (এইটা মাঝে মধ্যে ইন্টারভিউতে জিজ্ঞেস করে বসে)|

*/

/*.................... problem part-1 ............................
1) Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result.

2) Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani.

3) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result.

4) Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result.

5) Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result.

6) Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result.
*/


/*.................... problem part-2 ............................
 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.

2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.

3) Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.

4) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.

5) Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.

*/