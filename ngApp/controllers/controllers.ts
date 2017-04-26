let token = window.localStorage['token']

namespace blog.Controllers {
// NOTE: USER LOGIN
  export class LoginController {
    public userInfo;
    public isAdmin;

    public login() {
            if(this.isAdmin === true) {
              this.userInfo.role = 'admin';
              this.createSession();
            } else {
              this.userInfo.role = 'guest';
              this.createSession();
            }
          }
          public createSession() {
            this.userService.loginUser(this.userInfo).then((data) => {
              this.$window.localStorage.setItem("token", JSON.stringify(data.token));
              this.$state.go('blog');
            })
          }

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
        console.log("You Have Created An Account");

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
    public payload
    public deleteBlog(id) {
      if(this.payload.role === 'admin') {
          alert('Success!');
          this.blogService.removeBlog(id);
          console.log("You Have Deleted A Blog Post");
        } else {
          alert('Denied. admins only.')
        }
    };

    public constructor(
      private blogService,
    ) {
  //    let payload = JSON.parse(window.atob(token.split('.')[1]));
  let token = window.localStorage['token'];
    if(token) {
      this.payload = JSON.parse(window.atob(token.split('.')[1]));
      console.log(this.payload);
       this.blogs = this.blogService.list(this.payload.id);
    }
    };
  };

// NOTE: ADD/CREATE BLOG POSTS
  export class AddBlogController {
    public blogs;
    public blog;
    public payload;

    public addBlog() {
      if(this.payload.role === 'admin') {
          alert('Success!');
          this.blog.owner_id = this.payload.id;
          this.blogService.saveBlog(this.blog);
          this.$state.go('blog');
          console.log("You Have Created A Blog Post")
        } else {
          alert('Denied! Admins onl.')
        }

    };

    public constructor(
      private blogService,
      public $state,
    ) {
      let token = window.localStorage['token'];
        if(token) {
          this.payload = JSON.parse(window.atob(token.split('.')[1]));
          console.log(this.payload);
           this.blogs = this.blogService.list(this.payload.id);
        }
        };
    };

// NOTE: EDIT/UPDATE BLOG POSTS
  export class EditBlogController {
    public blog;
    public id;
    public payload;

    public editBlog() {
      if(this.payload.role === 'admin') {
          alert('Success!');
          this.blog.id = this.id;
          this.blogService.saveBlog(this.blog);
          this.$state.go('blog');
          console.log("You Have Updated A Blog Post");
        } else {
          alert('Denied. admins only.')
        }
    };

    public constructor(
      private blogService,
      public $stateParams,
      public $state,
    ) {
      this.id = $stateParams['id'];
      let token = window.localStorage['token'];
        if(token) {
          this.payload = JSON.parse(window.atob(token.split('.')[1]));
          console.log(this.payload);
        }
    };
  };

};
