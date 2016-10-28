'use strict';

import {pubsub} from '../src/js/events/pubsub';

var testEvent = 'TEST_EVENT';

describe("pubsub: Subscribe", function() {
  var testDataOutput;
  var testDataInput = { testData: "hello world" };
  var subscription = pubsub.subscribe(testEvent, function(message, data) {
    testData = { message: message, data: data};
  });

  it("Returns an unsubscribe function", function() {
    expect(typeof subscription.remove).not.toBe('undefined');
    expect(typeof subscription.remove).toBe( typeof function() {} );
  });

  it("Has a method that is called when the event is published", function() {

  });

  it("Recieves incoming message and data", function() {

  });
});
