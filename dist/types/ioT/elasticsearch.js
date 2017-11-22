"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Elasticsearch extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::Elasticsearch', properties, dependsOn);
    }
}
exports.default = Elasticsearch;