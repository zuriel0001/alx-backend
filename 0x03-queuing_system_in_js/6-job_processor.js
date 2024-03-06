#!/usr/bin/yarn dev
import { createQueue } from 'kue';

//Create a queue with Kue
const queue = createQueue({name: 'push_notification_code'});

const job = queue.create('push_notification_code', {
  phoneNumber: '0247627508',
  message: 'Account registered',
});

//queue process that will listen to new jobs on push_notification_code
job
  .on('enqueue', () => {
    console.log('Notification job created:', job.id);
  })
  .on('complete', () => {
    console.log('Notification job completed');
  })
  .on('failed attempt', () => {
    console.log('Notification job failed');
  });
job.save();
