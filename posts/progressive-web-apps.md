---
title: Progressive Web Apps
author: Kartikey Tandon
project_repo: 
author_github: kartikeytandon
level: Beginner
description: The rise of Progressive Web Apps and are they the future?
---

# Progressive Web Apps (PWAs): A web-mobile integrated solution

*Have you ever wished you could develop a mobile app using your existing web development skills? What if you could create an app that works on both web and mobile platforms with the same codebase? Let's dive into the world of PWAs!*

Progressive web apps are web applications that leverage modern web technologies to provide users with a native app-like experience, such as offline functionality, push notifications, and access to device hardware, while still being accessible via a web browser. They are designed to be responsive, fast, and reliable, and can be installed on a user's device like a traditional native app, making them accessible from the home screen.

![PWA](https://drive.google.com/uc?id=1anKEQSc7Kwwor0JmXxGp_MGihIAV1TCA)  

## Mobile Web vs Native Apps

![Web vs App](https://cdn-images-1.medium.com/v2/resize:fit:1000/0*3l5dta7ZgildqZVn)

An average user spends 87% of their time on Native Apps, but ever wondered why? Here are the reasons:
1. There are push notifications that keeps user engaged and bring them back.
2. Home screen icons makes Access to the application easy.
3. Some Device features like camera also add some value to this.
4. And obviously, most of these Native apps work offline.

While we see that there is more engagement on Native apps but there are more users on Web than Native Apps.

By adding features such as push notifications, camera access, and offline accessibility with the help of modern web technologies, web apps can behave similarly to native apps without requiring developers to learn new languages. This means that existing web development skills can be leveraged to create apps that provide a native app experience, without the need for additional training.

## Native Apps vs Web Pages vs PWAs

**Native Apps** - It has access device features but have you ever thought about the average number of new apps do a single user install in a month? Possibly the answer is Zero. Users usually have specific standard apps for their each and every tasks like Whatsapp or Instagram as the social media platforms. So, one can easily conclude that the reach of the Native App is not that much while only top three apps win and the rest lose.

**Traditional Web Apps** - It doesn't have access to device features and of course, they can't run offline but the reach is much higher than Native apps.

**Progressive Web App (PWAs)**
And then comes the master of all, The Progressive Web Apps. It has Native features like Accessing device features. It has a higher reach. In simple language, The Progressive Web Apps is the combination of the positives of both Native Apps and Traditional Web Pages.

## Building Blocks of PWAs

### *-> Service Workers*

Service worker is a Javascript file that runs in the background of a website and can handle tasks like managing offline content and speeding up page load times. It also allows us to enable other PWA features, such as Background Sync, push notifications and many more.
Let's understand Push notification, push notifications are a type of message that can be sent to a user's device or browser, even when the user is not actively using the app or website. These notifications are "pushed" to the user's device or browser from a server, without the user having to actively check for updates.

**What about Background Sync?**

Let's take a real life example, often you must have seen that if you are using instagram and you liked one of the posts out there and at the same time your internet connection is lost then the request will be synced in the background and whenever the internet connection is back a like request would be sent and your like would be updated.

![Demo](https://cdn-images-1.medium.com/v2/resize:fit:1000/0*R42cQ_5uDO6hxEIC.png)

### *-> Application Manifest*

The Application manifest makes the Application installable on your home screen. Basically it's a JSON (Javascript Object Notation) file that provides information to the browser about how to display and behave with a web application when it is installed on a user's device or added to the home screen. It provides information such as the name of the application, icons to use, the start URL and other things that control how the application should look and feel.

### *-> Responsive Design*

Responsive design is an approach to web design that aims to provide an optimal viewing and user experience across a wide range of devices that includes desktop computers, tablets and smartphones.

### *-> Geolocation API*

The geolocation API is a web API that allows web applications to access a device's location information, such as latitude and longitude coordinates. This API works by using various location sensors on the device, such as GPS, Wi-Fi, and cellular networks, to determine the device's location.
In simple terms, it allows access to user's location.

### *-> Media API*

Media APIs allow access to the device camera and microphone.

*"Do you know Twitter Lite is a Progressive Web App"*

## How to get Started with building Progressive Web Apps?

Angular is often considered best for making PWAs but if you are doing React you can continue to do so but remember that React or Angular are not essential for getting started building with PWA.

## Summary

1. Progressive web apps (PWAs) use modern web technologies to provide users with a native app-like experience on both web and mobile platforms.
2. By adding features like push notifications, camera access, and offline accessibility, PWAs can behave similarly to native apps.
3. PWAs are a combination of the positives of both native apps and traditional web pages, with high reach and native features.
4. The building blocks of PWAs include service workers, application manifest, responsive design, geolocation API, media API, and more.

*Remember, Progressive Web Apps are the next big thing in Web Development as they bring mobile-app-like experiences to your users without requiring them to install an app from the app store/ play store.*

**Keep exploring and learning….**