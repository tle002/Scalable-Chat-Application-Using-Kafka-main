const { Kafka } = require('kafkajs');
const fs = require('fs');

const kafka = new Kafka({
    brokers: [''],
    ssl: {
        ca: [fs.readFileSync("./ca.pem", "utf-8")],
    },
    sasl: {
        username: "",
        password: "",
        mechanism: ""
    }
});

const producer = kafka.producer();

const getConsumer = (groupId) => {
    return  kafka.consumer({ groupId });
};
module.exports = { kafka, producer, getConsumer };
