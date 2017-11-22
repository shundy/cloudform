"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SecurityGroup extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::SecurityGroup', properties, dependsOn);
    }
}
exports.default = SecurityGroup;