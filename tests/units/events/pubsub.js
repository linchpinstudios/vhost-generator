import {pubsub} from '../src/js/events/pubsub';

var testEvent = 'TEST_EVENT';

describe("PubSub", function() {
  it("Subscribe should return an unsubscribe method", function() {
    var subscription = pubsub.subscribe(testEvent, function(message, data) {});

    expect(subscription).toBe(false);
  });
});
