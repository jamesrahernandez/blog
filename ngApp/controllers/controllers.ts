let token = window.localStorage['token']

namespace blog.Controllers {
// NOTE: USER LOGIN
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

// NOTE: REGISTER USER
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
// NOTE: READ/DELETE BLOG POSTS
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

// NOTE: ADD/CREATE BLOG POSTS
  export class AddBlogController {
    public blogs;
    public blog;

    public addBlog() {
      let payload = JSON.parse(window.atob(token.split('.')[1]));
      this.blog.owner_id = payload.id;
      this.blogService.saveBlog(this.blog);
      this.$state.go('blog');
    };

    public constructor(
      private blogService,
      public $state,
    ) {

    };
  };
// NOTE: EDIT/UPDATE BLOG POSTS
  export class EditBlogController {
    public blog;
    public id;

    public editBlog() {
      this.blog.id = this.id;
      this.blogService.saveBlog(this.blog);
      this.$state.go('blog')
    };

    public constructor(
      private blogService,
      public $stateParams,
      public $state,
    ) {
      this.id = $stateParams['id'];
    };
  };

};
