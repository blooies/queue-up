import { Mongo } from 'meteor/mongo';

export const Events = new Mongo.Collection('events');

Meteor.methods({
  'events.insert'(eventInfo) {
    // Make sure the user is logged in before inserting a task
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    eventInfo.createdAt = new Date();
    eventInfo.owner = this.userId;
    eventInfo.address = Meteor.users.findOne(this.userId).emails[0].address;

    console.log("SAVING EVENTS", eventInfo);
    // Events.insert(eventInfo);
  }
});