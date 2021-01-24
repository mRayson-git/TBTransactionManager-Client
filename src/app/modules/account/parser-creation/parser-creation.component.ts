import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parser-creation',
  templateUrl: './parser-creation.component.html',
  styleUrls: ['./parser-creation.component.scss']
})
export class ParserCreationComponent implements OnInit {

  parserForm: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.parserForm = this.fb.group({
      bankAccountName: ['', Validators.required],
      hasHeader: ['false'],
      dateCol: ['', Validators.required],
      amountCol: ['', Validators.required],
      payeeCol: ['', Validators.required],
      typeCol: ['', Validators.required],
    });
  }

  saveParser(): void {
    console.log(this.parserForm.value);
  }

}
