angular.module('controllers', ['ui.bootstrap', 'ui.router'])

    .controller("RegistrationController", ['$log', '$scope', '$location', '$keys', function ($log, $scope, $location, $keys) {

        $scope.state = undefined;
        $scope.consumer = {};

        $scope.requestApiKey = function () {
            $keys.requestKey($scope.consumer, function (err, consumer) {
                if (err) {
                    $log.debug("An error occured:" + JSON.stringify(err));
                    $scope.error = err;
                    $scope.state = 'error';
                } else {
                    $log.debug(consumer);
                    $scope.consumer = consumer;
                    $scope.state = 'success';
                }
            });
        };

        $scope.back = function () {
            delete $scope.state;
        };

        $log.debug("Loaded RegistrationController");
    }])

    .controller("ValidationController", ['$log', '$scope', '$location', '$keys', function ($log, $scope, $location, $keys) {

        $scope.checkApiKey = function () {
            $keys.checkKey($scope.api_key, function (err, consumer) {
                if (err) {
                    $scope.key_ok = false;
                    $scope.key_error = err.message;
                    $log.debug("An error occured:" + JSON.stringify(err));
                } else {
                    $scope.key_ok = true;
                    $scope.key_error = false;
                    $log.debug(consumer);
                }
            });
        };

        $log.debug("Loaded validation.MainController");
    }]);