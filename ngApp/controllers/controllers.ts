namespace blog.Controllers {

  export class LoginController {
    public userInfo;

    public login() {
      this.userService.loginUser(this.userInfo).then((data) => {
        this.$window.localStorage.setItem("token", JSON.stringify(data.token));
        this.$state.go('blog');
          alert('Login Successful!');
      });
    };

    public constructor(
      private userService,
      public $window,
      public $state,
    ) {

    };

  };

  export class RegisterController {
    public user;

    public signUp() {
      this.userService.registerUser(this.user).then(() => {
        this.$state.go('login');
        alert('Signup Successful, Please Login!');
      });
    };

    public constructor(
      private userService,
      public $state,
    ) {

  };

};

  export class BlogController {
    public blogs;

    public deleteBlog(id) {
      this.blogService.removeBlog(id);
    };

    public constructor(
      private blogService,
    ) {
      this.blogs = this.blogService.list();
    };
  };

  export class AddBlogController {
    public blogs;
    public blog;

    public addBlog() {
      this.blogService.saveBlog(this.blog);
      this.$state.go('blog');
    };

    public constructor(
      private blogService,
      public $state,
    ) {

    };
  };

  export class EditBlogController {
    public blog;
    public id;

    public editBlog() {
      this.blog.id = this.id;
      this.blogService.saveBlog(this.blog);
    };

    public constructor(
      private blogService,
      public $stateParams,
    ) {
      this.id = $stateParams['id'];
    };
  };

};
