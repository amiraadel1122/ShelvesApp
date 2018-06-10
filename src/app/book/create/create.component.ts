import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Book,
  BookService,
  User,
  UserService,
  Category,
  CategoryService
} from '../../shared';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  book: Book;
  currentUser: User;
  bookForm: FormGroup;
  bookFormErrors = {};
  categories: Array<Category>;
  bookImages: Array<string>;
  isBookStore: Boolean;
  isBids: Boolean;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private categoryService: CategoryService,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.bookForm = this.fb.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'category_id': ['', Validators.required],
      'book_images_attributes': ['', Validators.required],
      'book_images_files': ['', Validators.required]
    });
    
   }

  ngOnInit() {

    this.isBookStore = false;

    // get list of book categories
    this.getCategories();

    // get book id from url
    const book_id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.bookImages = [];

    // get book data
    if (book_id) {
      this.bookService.getBook(book_id).subscribe(
        result => {
          this.book = result;
          console.log(this.book);
        },
        error => {
          console.log(error);
        }
      );
    }

    // Load the current user's data
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;
        // add form control for username if this is the register page
        if (this.currentUser.role === 'Book store') {
          this.isBookStore = true;
          this.bookForm.addControl('price', new FormControl());
          this.bookForm.addControl('quantity', new FormControl());
        } else {
          this.bookForm.addControl('transcation', new FormControl());
        }
      }
    );
  }

  // Create book
  createBook() {
    this.bookForm.get('book_images_attributes').setValue(this.bookImages);
    const book = this.bookForm.value;
    this.bookService
    .createBook(book)
    .subscribe(
      result => {
        this.router.navigateByUrl('/');
    },
      error => {
        console.log(error);
      }
    );
  }

  // get selected files
  onFileChange(e) {
    console.log (e.target.files);
    this.bookImages = [];
    for (let file of e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (result) => {
        //  console.log(reader.result)
        this.bookImages.push(reader.result);
      };
      console.log(this.bookImages);
    }
  }

  // get list of all categories
  getCategories() {
    this.categoryService.getCategories().subscribe(
      result => {
        this.categories = result['data'];
      },
      error => {
        console.log(error);
      }
    );
  }

  // change form according to transaction
  onTransactionChange() {
    let transcation = this.bookForm.get('transcation').value;
    if (transcation === 'Sell By Bids') {
      this.isBids = true;
      this.bookForm.addControl('price', new FormControl());
    } else {
      this.isBids = false;
      this.bookForm.removeControl('price');
    }
  }
}
