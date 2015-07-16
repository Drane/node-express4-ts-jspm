/**
 * Created by jochen on 16/07/15.
 */
/// <reference path="../../typings/tsd.d.ts" />

/*
 - Will ignore System.js for now... not easy:
 - see https://github.com/systemjs/systemjs/issues/245
var System = require('systemjs');
*/
var request = require("request");

var DEBUG = false;
DEBUG && console.log("#=> src/test/serverSpec.ts");
var baseUrl = "http://localhost:3000/";

describe("prefabSURF server", () => {
    DEBUG && console.log("#=>\tprefabSURF server");

    describe("GET /", () => {
        DEBUG && console.log("#=>\t\tGET /");

        it("returns status code 200", (done) => {
            request.get(baseUrl, (error, response, body) => {
                DEBUG && console.log("#=>\t\terror:", error, "\tresponse:", response, "\body:", body);
                if(expect(response).toBeDefined()){
                    expect(response.statusCode).toBe(200);
                }
                done(); // https://github.com/mhevery/jasmine-node#async-tests
            });
        });

        it("returns It Works!", function(done) {
            request.get(baseUrl, function(error, response, body) {
                DEBUG && console.log("#=>\t\terror:", error, "\tresponse:", response, "\body:", body);
                expect(body).toBe("It Works!");
                done();
            });
        });
    });

});