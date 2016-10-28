class PubSub {
  constructor() {
    this.topics = {};
    this.hasOwnProperty = topics.hasOwnProperty;
  }

  subscribe( topic, listener ) {
    if ( !this.hasOwnProperty.call(topics, topic)) {
      topics[topic] = [];
    }

    var index = topics[topic].push(listener) - 1;

    return {
      remove: () => {
        delete topics[topic][index];
      }
    }
  }
}
