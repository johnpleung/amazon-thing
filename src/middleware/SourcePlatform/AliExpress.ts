import { SourcePlatform } from './SourcePlatform';
import { fn } from '../../common/structures';
const {installMouseHelper} = require('../../common/install-mouse-helper');

const fetch = require("node-fetch");
const puppeteer = require("puppeteer");

export class AliExpress extends SourcePlatform {
    constructor() {
        super();
    }
}