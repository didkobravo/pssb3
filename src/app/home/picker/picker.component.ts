import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OpportunitiesService } from '../../services/opportunities.service';
import { Router, Routes, RouterModule, ActivatedRoute } from "@angular/router";

import { QuillComponent, QuillDirective,
  QuillConfigInterface, QuillModulesInterface } from 'ngx-quill-wrapper';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
export class PickerComponent implements OnInit {

  @Input() opened: boolean;
  
  @Input() pckr: any = {
    pckrAction: '',
    pckrSubject: '',
    pckrType: ''
  };

  @Output() modalOpenedStateChanged = new EventEmitter<any>();

  opportunities: any[];
  public selectedItem;

  nTrackBySelected: any[] = [];
  pricings: any[];

  customerStories: any[];

  users: any[];

  persistentSelectionPassed: boolean = false;
  selectedUserWithEditRights: any[] = [];
  selectedUserReadOnly: any[] = [];

  quillEditorRef;

  

  public config: QuillConfigInterface = {
    theme: 'snow',
    readOnly: false
  };
  public modules: QuillModulesInterface = {};
  private toolbar: any = [
    [{ 'size': ['small', false, 'large'] }],

    ['bold', 'italic'],

    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }, { 'list': 'bullet' }]
  ];

  isShowMore: boolean = false;

  constructor(
    private oppService: OpportunitiesService,
    private router: Router, 
    private route: ActivatedRoute
  ) {
    this.config.modules = { toolbar: this.toolbar };
  }

  ngOnInit() {
    this.opportunities = this.oppService.getOpportunities();
    this.pricings = this.oppService.getPricings();
    this.customerStories = this.oppService.getCustomerStories();
    // this.users = this.oppService.getUsers();
    this.users = this.oppService.getQuestions();
    this.pckr = {
      pckrAction: '',
      pckrSubject: '',
      pckrType: ''
    };
  }

  emmitOpenChange() {
    this.modalOpenedStateChanged.emit( this.opened );
    if ( !this.opened ) {
      this.closePckr();
    }
  }

  closePckr() {
    this.isShowMore = false;
    this.selectedItem = null;
    this.nTrackBySelected = [];
    this.selectedItem = null;
    this.persistentSelectionPassed = false;
    this.opened = false;
  }

  // getEditorInstance(editorInstance: any) {
  //   this.quillEditorRef = editorInstance;
  //   // console.log(this.quillEditorRef)
  //   // const toolbar = editorInstance.getModule('toolbar');
  //   // toolbar.addHandler('image', this.imageHandler);
  // }

  download() {
    // this.router.navigate([ 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/11907/His%20Girl%20Friday%20%7C%20Public%20Domain%20Movies.webloc' ]);
    let url = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/11907/His%20Girl%20Friday%20%7C%20Public%20Domain%20Movies.webloc';
    this.router.navigate(['/externalRedirect', { externalUrl: url }]);
  }

}