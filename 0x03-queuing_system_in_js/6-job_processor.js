#!/usr/bin/yarn dev
import { createQueue } from 'kue';

//Create a queue with Kue
const queue = createQueue();

//Take argument and log to console
const sendNotification = (phoneNumber, message) => {
  console.log(
    `Sending notification to ${phoneNumber},`,
    'with message:',
    message,
  );
};

//queue process that will listen to new jobs on push_notification_code:
queue.process('push_notification_code', (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message);
  done();
});
