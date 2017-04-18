var blog;
(function (blog) {
    angular.module('blog', ['ui.router', 'ngResource', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('login', {
            url: '/',
            templateUrl: '/ngApp/views/login.html',
            controller: blog.Controllers.LoginController,
            controllerAs: 'controller'
        })
            .state('register', {
            url: '/register',
            templateUrl: '/ngApp/views/register.html',
            controller: blog.Controllers.RegisterController,
            controllerAs: 'controller'
        })
            .state('blog', {
            url: '/blog',
            templateUrl: '/ngApp/views/blog.html',
            controller: blog.Controllers.BlogController,
            controllerAs: 'controller'
        })
            .state('add', {
            url: '/add',
            templateUrl: '/ngApp/views/addBlog.html',
            controller: blog.Controllers.AddBlogController,
            controllerAs: 'controller'
        })
            .state('edit', {
            url: '/edit/:id',
            templateUrl: '/ngApp/views/editBlog.html',
            controller: blog.Controllers.EditBlogController,
            controllerAs: 'controller'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(blog || (blog = {}));
