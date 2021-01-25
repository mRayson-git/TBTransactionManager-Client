import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Parser } from '../../shared/models/parser';
import { User } from '../../shared/models/user';
import { AuthService } from '../../shared/services/auth.service';
import { ParserService } from '../../shared/services/parser.service';

@Component({
  selector: 'app-parser-creation',
  templateUrl: './parser-creation.component.html',
  styleUrls: ['./parser-creation.component.scss']
})
export class ParserCreationComponent implements OnInit {

  parserForm: FormGroup;
  currUser: User;

  constructor(private fb: FormBuilder, private auth: AuthService, private ps: ParserService) { }

  ngOnInit(): void {
    this.currUser = this.auth.getUser();
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
    const parser: Parser = {
      email: this.currUser.email,
      bankAccountName: this.parserForm.get('bankAccountName').value,
      hasHeader: this.parserForm.get('hasHeader').value,
      dateCol: this.parserForm.get('dateCol').value,
      amountCol: this.parserForm.get('amountCol').value,
      payeeCol: this.parserForm.get('payeeCol').value,
      typeCol: this.parserForm.get('typeCol').value,
    }
    this.ps.saveParser(parser);
    this.parserForm.reset();
  }

}
