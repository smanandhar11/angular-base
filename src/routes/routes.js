export default ($stateProvider) => {
    $stateProvider
        .state('/', {
            url:'/',
            redirectTo:'mainPage'
        })
}