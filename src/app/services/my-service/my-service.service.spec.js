"use strict";
var testing_1 = require('@angular/core/testing');
var my_service_service_ts_1 = require('./my-service.service.ts');
testing_1.describe('MyService Service', function () {
    testing_1.beforeEachProviders(function () { return [my_service_service_ts_1.MyServiceService]; });
    testing_1.it('should ...', testing_1.inject([my_service_service_ts_1.MyServiceService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=my-service.service.spec.js.map