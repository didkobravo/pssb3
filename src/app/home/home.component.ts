import { Component, OnInit, ViewChild } from '@angular/core';
import { ClarityIcons } from '@clr/icons';
import '@clr/icons/shapes/all-shapes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  filterBy: string = '';
  filterByAreas: any[];
  roles: any[];
  role: any;

  // @ViewChild('navtiles', {static: true}) navtiles;

  constructor() { }

  ngOnInit() {
    this.filterByAreas = [
      {
        name: 'Opportunity',
        icon: 'bundle'
      },
      {
        name: 'Pricing',
        icon: 'dollar'
      },
      {
        name: 'Customer Story',
        icon: 'library'
      }
    ];

    this.roles = [
      { 
        name: 'Services Sales',
        tiles: [
          {
            name: 'Create',
            icon: 'plus-circle',
            links: [
              {
                name: 'Opportunity',
                icon: 'bundle',
                links: [
                  {
                    name: 'Create Opportunity using Outcome-Focused Approach',
                    route: '/sb/create-opportunity/2/itvm'
                  },
                  {
                    name: 'Create Opportunity using Product-Focused Approach',
                    route: '/sb/create-opportunity/2/prdct' 
                  },
                  {
                    name: 'Create Opportunity using Sales Plays',
                    route: '/sb/create-opportunity/2/prdct'
                  }
                ]
              },
              {
                name: 'Customer Story',
                icon: 'library',
                links: [
                  {
                    name: 'Create standalone Customer Story',
                    route: '/csp/create/1'
                  },
                  {
                    name: 'Create Customer Story for your Opportunity',
                    route: '/csp/create/1' 
                  },
                  {
                    name: 'Create Customer Story for an Existing Opportunity',
                    route: '/csp/create/1'
                  }
                ]
              },
              {
                name: 'Survey',
                icon: 'form',
                links: [
                  {
                    name: 'Create Survey using Outcome-Focused Approach',
                    route: '/sb/create-opportunity/2/itvm'
                  }
                ]
              },
              {
                name: 'Pricing',
                icon: 'dollar',
                links: [
                  {
                    name: 'Create standalone SOW Pricing',
                    route: '/pricing/create/1'
                  },
                  {
                    name: 'Create SOW Pricing for an Existing Opportunity',
                    route: '/pricing/create/1'
                  },
                  {
                    name: 'Create PCR from an existing Pricing',
                    route: '/pricing/create/1'
                  },
                  {
                    name: 'Create WO from an existing Pricing',
                    route: '/pricing/create/1'
                  },
                  {
                    name: 'Create Modified Pricing from an existing Opportunity Pricing',
                    route: '/pricing/create/1'
                  }
                ]
              }
            ]
          },
          {
            name: 'Edit',
            icon: 'pencil',
            links: [
              {
                name: 'Opportunity',
                icon: 'bundle',
                links: [
                  {
                    name: 'Edit Opportunity',
                    route: '/sb/all',
                    picker: {
                      pckrType: 'transient',
                      pckrAction: 'Edit',
                      pckrSubject: 'Opportunity'
                    }
                  },
                  {
                    name: 'Delete an Existing Opportunity',
                    route: '/sb/all',
                    picker: {
                      pckrType: 'transient',
                      pckrAction: 'Delete',
                      pckrSubject: 'Opportunity'
                    }
                  },
                  {
                    name: 'Mark an Existing Opportunity as Closed',
                    route: '/sb/all',
                    picker: {
                      pckrType: 'transient',
                      pckrAction: 'Mark as Closed',
                      pckrSubject: 'Opportunity'
                    }
                  },
                  {
                    name: 'Search in all Opportunities by Keyword',
                    route: '/sb/all',
                    picker: {
                      pckrType: 'transient',
                      pckrAction: 'Search',
                      pckrSubject: 'Opportunity'
                    }
                  }
                ]
              },
              {
                name: 'Customer Story',
                icon: 'library',
                links: [
                  {
                    name: 'Edit an Existing Customer Story',
                    route: '/csp/all',
                    picker: {
                      pckrType: 'transient',
                      pckrAction: 'Edit',
                      pckrSubject: 'Customer Story'
                    }
                  },
                  {
                    name: 'Publish an Existing Customer Story',
                    route: '/csp/all',
                    picker: {
                      pckrType: 'transient',
                      pckrAction: 'Publish',
                      pckrSubject: 'Customer Story'
                    }
                  },
                  {
                    name: 'Unpublish an Existing Customer Story',
                    route: '/csp/all',
                    picker: {
                      pckrType: 'transient',
                      pckrAction: 'Unpublish',
                      pckrSubject: 'Customer Story'
                    }
                  },
                  {
                    name: 'Upload Final Customer Impact Summary for an Existing Customer Story',
                    route: '/csp/all',
                    picker: {
                      pckrType: 'transient',
                      pckrAction: 'Unpublish',
                      pckrSubject: 'Customer Story'
                    }
                  },
                  {
                    name: 'Delete an Existing Customer Story',
                    route: '/csp/all',
                    picker: {
                      pckrType: 'transient',
                      pckrAction: 'Delete',
                      pckrSubject: 'Customer Story'
                    }
                  },
                  {
                    name: 'Browse Customer Stories',
                    route: '/csp/browse'
                  }
                ]
              },
              {
                name: 'Survey',
                icon: 'form',
                links: [
                  {
                    name: 'View/Edit Survey',
                    route: '/sb/all',
                    picker: {
                      pckrType: 'transient',
                      pckrAction: 'View/Edit',
                      pckrSubject: 'Survey'
                    }
                  },
                  {
                    name: 'Delete an Existing Survey',
                    route: '/sb/all',
                    picker: {
                      pckrType: 'transient',
                      pckrAction: 'Delete',
                      pckrSubject: 'Survey'
                    }
                  },
                  {
                    name: 'Mark an Existing Survey as Completed',
                    route: '/sb/all',
                    picker: {
                      pckrType: 'transient',
                      pckrAction: 'Mark as Closed',
                      pckrSubject: 'Opportunity'
                    }
                  }
                ]
              },
              {
                name: 'Pricing',
                icon: 'dollar',
                links: [
                  {
                    name: 'Edit an existing Pricing',
                    route: '/pricing/all',
                    picker: {
                      pckrType: 'transient',
                      pckrAction: 'Edit',
                      pckrSubject: 'Pricing'
                    }
                  },
                  {
                    name: 'Mark an existing Pricing as ',
                    nameOptions: [
                      { name: 'Draft' },
                      { name: 'Opened' },
                      { name: 'Submitted' },
                      { name: 'Approved' },
                      { name: 'Rejected' }
                    ],
                    route: '/pricing/all',
                    picker: {
                      pckrType: 'transient',
                      pckrAction: 'Mark as..',
                      pckrSubject: 'Pricing'
                    }
                  },
                  {
                    name: 'Mark an existing Pricing as ',
                    nameOptions2: [
                      { name: 'Draft' },
                      { name: 'Opened' },
                      { name: 'Submitted' },
                      { name: 'Approved' },
                      { name: 'Rejected' }
                    ],
                    route: '/pricing/all',
                    picker: {
                      pckrType: 'transient',
                      pckrAction: 'Mark as..',
                      pckrSubject: 'Pricing'
                    }
                  },
                  {
                    name: 'Clone existing Pricing',
                    route: '/pricing/all',
                    picker: {
                      pckrType: 'transient',
                      pckrAction: 'Clone',
                      pckrSubject: 'Pricing'
                    }
                  },
                  {
                    name: 'Delete an existing Pricing',
                    route: '/pricing/all',
                    picker: {
                      pckrType: 'transient',
                      pckrAction: 'Delete',
                      pckrSubject: 'Pricing'
                    }
                  }
                ]
              }

            ]
          },
          {
            name: 'Share',
            icon: 'share',
            links: [
              {
                name: 'Opportunity',
                icon: 'bundle',
                links: [
                  {
                    name: 'Share an existing Opportunity',
                    route: '/sb/all',
                    picker: {
                      pckrType: 'persistent',
                      pckrAction: 'Share',
                      pckrSubject: 'Opportunity'
                    }
                  },
                  {
                    name: 'Reclaim your shared Opportunity',
                    route: '/sb/all',
                    picker: {
                      pckrType: 'persistent',
                      pckrAction: 'Reclaim',
                      pckrSubject: 'Opportunity'
                    }
                  }
                ]
              },
              {
                name: 'Customer Story',
                icon: 'library',
                links: [
                  {
                    name: 'Share an Existing Customer Story',
                    route: '/pricing/all',
                    picker: {
                      pckrType: 'persistent',
                      pckrAction: 'Share',
                      pckrSubject: 'Customer Story'
                    }
                  }              
                ]
              },
              {
                name: 'Pricing',
                icon: 'dollar',
                links: [
                  {
                    name: 'Share an Existing Pricing',
                    route: '/pricing/all',
                    picker: {
                      pckrType: 'persistent',
                      pckrAction: 'Share',
                      pckrSubject: 'Pricing'
                    }
                  }              
                ]
              }
            ]
          },
          {
            name: 'Download',
            icon: 'download',
            links: [
              {
                name: 'Opportunity',
                icon: 'bundle',
                links: [
                  {
                    name: 'Download Executive Proposal for an Existing Opportunity',
                    route: '/sb/all',
                    picker: {
                      pckrType: 'persistent',
                      pckrAction: 'Download',
                      pckrSubject: 'Opportunity'
                    }
                  },

                  {
                    name: 'Download Detailed Proposal for an Existing Opportunity',
                    route: '/sb/all',
                    picker: {
                      pckrType: 'persistent',
                      pckrAction: 'Download',
                      pckrSubject: 'Opportunity'
                    }
                  },
                  {
                    name: 'Download Services Scope and Description (SSaD) for an Existing Opportunity',
                    route: '/sb/all',
                    picker: {
                      pckrType: 'persistent',
                      pckrAction: 'Download',
                      pckrSubject: 'Opportunity'
                    }
                  },
                  {
                    name: 'Download Fixed Fee SOW for an Existing Opportunity',
                    route: '/sb/all',
                    picker: {
                      pckrType: 'persistent',
                      pckrAction: 'Download',
                      pckrSubject: 'Opportunity'
                    }
                  },
                  {
                    name: 'Download Time & Materials SOW for an Existing Opportunity',
                    route: '/sb/all',
                    picker: {
                      pckrType: 'persistent',
                      pckrAction: 'Download',
                      pckrSubject: 'Opportunity'
                    }
                  }
                ]
              },
              {
                name: 'Engagement Delivery Materials',
                icon: 'bundle',
                links: [
                  {
                    name: 'Download Delivery Materials for your Opportunity',
                    route: '/sb/all',
                    picker: {
                      pckrType: 'persistent',
                      pckrAction: 'Download',
                      pckrSubject: 'Opportunity'
                    }
                  },
                  {
                    name: 'Download Delivery Materials for an Existing Opportunity',
                    route: '/sb/all',
                    picker: {
                      pckrType: 'persistent',
                      pckrAction: 'Download',
                      pckrSubject: 'Opportunity'
                    }
                  },
                  {
                    name: 'Download Delivery Materials for non-Solution Builder Opportunity',
                    route: '/sb/all',
                    picker: {
                      pckrType: 'persistent',
                      pckrAction: 'Download',
                      pckrSubject: 'Opportunity'
                    }
                  }
                ]
              },
              {
                name: 'Customer Story',
                icon: 'library',
                links: [
                  {
                    name: 'Download Customer Story PowerPoint',
                    route: '/sb/all',
                    picker: {
                      pckrType: 'persistent',
                      pckrAction: 'Download',
                      pckrSubject: 'Customer Story PowerPoint'
                    }
                  },
                  {
                    name: 'Download Final Customer Impact Summary',
                    route: '/sb/all',
                    picker: {
                      pckrType: 'persistent',
                      pckrAction: 'Download',
                      pckrSubject: 'Final Customer Impact Summary'
                    }
                  }
                ]
              },
              {
                name: 'Pricing',
                icon: 'dollar',
                links: [
                  {
                    name: 'Download the Output file of an Existing Pricing',
                    route: '/sb/all',
                    picker: {
                      pckrType: 'persistent',
                      pckrAction: 'Download',
                      pckrSubject: 'Pricing'
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
    this.role = this.roles[0];
    // this.navtiles.changeNavTiles( this.role.tiles );
  }

}