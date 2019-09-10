import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
// , ViewContainerRef

@Component({
  selector: 'app-nav-tiles',
  templateUrl: './nav-tiles.component.html',
  styleUrls: ['./nav-tiles.component.scss']
})
export class NavTilesComponent implements OnInit {

  private _navtitleModeToggle: boolean = false;

  opened: boolean = false;
  pckr: any;
  nameOption: any = null;

  navtiles: any[];
  navtiles1: any[];
  navtiles2: any[];

  public tileColors: any[];
  public color6: string = '#1973c0';

  @Input() tiles: any[];
  @Input() filterBy: string = '';

  constructor(
    public vcRef: ViewContainerRef
  ) { }

  ngOnInit() {

    this.tileColors = [
      {
        header: '#1D5100',
        body: '#1973c0'
      },
      {
        header: '#C47D00',
        body: '#1973c0'
      },
      {
        header: '#AA4500',
        body: '#1973c0'
      },
      {
        header: '#003D79',
        body: '#1973c0'
      },
      {
        header: '#ffffff',
        body: '#1973c0'
      },
      {
        header: '#ffffff',
        body: '#1973c0'
      }
    ];
    this.navtiles1 = [
      {
        name: 'Create',
        icon: 'plus-circle',
        links: [
          {
            name: 'Opportunity',
            icon: 'bundle',
            links: [
              {
                name: 'Outcome-Focused Solution using ITVM',
                route: '/sb/create-opportunity/2/itvm'
              },
              {
                name: 'Outcome-Focused Solution using DWJM',
                route: '/sb/create-opportunity/2/dwjm' 
              },
              {
                name: 'Individual Product-Focused Services',
                route: '/sb/create-opportunity/2/prdct'
                
              },
              {
                name: 'Packaged Product-Focused Services',
                route: '/sb/create-opportunity/2/prdct'
              }
            ]
          },
          {
            name: 'Pricing',
            icon: 'dollar',
            links: [
              {
                name: 'New Standalone Pricing',
                route: '/pricing/create/1'
              },
              {
                name: 'Pricing for an Existing Opportunity',
                route: '/pricing/create/1'
              }
            ]
          },
          {
            name: 'Customer Story',
            icon: 'library',
            links: [
              {
                name: 'Standalone Customer Story',
                route: '/csp/create/1'
              },
              {
                name: 'Customer Story for an Existing Opportunity',
                route: '/csp/create/1'
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
                name: 'Edit an Existing Opportunity',
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
              }
            ]
          },
          {
            name: 'Pricing',
            icon: 'dollar',
            links: [
              {
                name: 'Edit an Existing Pricing',
                route: '/pricing/all',
                picker: {
                  pckrType: 'transient',
                  pckrAction: 'Edit',
                  pckrSubject: 'Pricing'
                }
              },
              {
                name: 'Delete an Existing Pricing',
                route: '/pricing/all',
                picker: {
                  pckrType: 'transient',
                  pckrAction: 'Delete',
                  pckrSubject: 'Pricing'
                }
              }
            ]
          },
          {
            name: 'Customer Story',
            icon: 'llibrary',
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
                name: 'Delete and Existing Customer Story',
                route: '/csp/all',
                picker: {
                  pckrType: 'transient',
                  pckrAction: 'Delete',
                  pckrSubject: 'Customer Story'
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
                name: 'Existing Opportunity',
                route: '/sb/all',
                picker: {
                  pckrType: 'persistent',
                  pckrAction: 'Share',
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
                name: 'Existing Pricing',
                route: '/pricing/all',
                picker: {
                  pckrType: 'persistent',
                  pckrAction: 'Share',
                  pckrSubject: 'Pricing'
                }
              }              
            ]
          },
          {
            name: 'Customer Story',
            icon: 'library',
            links: [
              {
                name: 'Existing Customer Story',
                route: '/csp/all',
                picker: {
                  pckrType: 'persistent',
                  pckrAction: 'Share',
                  pckrSubject: 'Customer Story'
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
                name: 'Delivery Materials for an Existing Opportunity',
                route: '/sb/all',
                picker: {
                  pckrType: 'persistent',
                  pckrAction: 'Download',
                  pckrSubject: 'Opportunity'
                }
              },

              {
                name: 'Executive Proposal for an Existing Opportunity',
                route: '/sb/all',
                picker: {
                  pckrType: 'persistent',
                  pckrAction: 'Download',
                  pckrSubject: 'Opportunity'
                }
              },
              {
                name: 'Detailed Proposal for an Existing Opportunity',
                route: '/sb/all',
                picker: {
                  pckrType: 'persistent',
                  pckrAction: 'Download',
                  pckrSubject: 'Opportunity'
                }
              },
              {
                name: 'Services Scope and Description (SSaD) for an Existing Opportunity',
                route: '/sb/all',
                picker: {
                  pckrType: 'persistent',
                  pckrAction: 'Download',
                  pckrSubject: 'Opportunity'
                }
              },
              {
                name: 'Fixed Fee SOW for an Existing Opportunity',
                route: '/sb/all',
                picker: {
                  pckrType: 'persistent',
                  pckrAction: 'Download',
                  pckrSubject: 'Opportunity'
                }
              },
              {
                name: 'Time & Materials SOW for an Existing Opportunity',
                route: '/sb/all',
                picker: {
                  pckrType: 'persistent',
                  pckrAction: 'Download',
                  pckrSubject: 'Opportunity'
                }
              },
              {
                name: 'Delivery Materials for an Existing Opportunity',
                route: '/sb/all',
                picker: {
                  pckrType: 'persistent',
                  pckrAction: 'Download',
                  pckrSubject: 'Opportunity'
                }
              },
              {
                name: 'Delivery Materials for non-Solution Builder Opportunity',
                route: '/sb/all',
                picker: {
                  pckrType: 'persistent',
                  pckrAction: 'Download',
                  pckrSubject: 'Opportunity'
                }
              }
            ]
          }
        ]
      }
    ];
    this.navtiles2 = [
      {
        name: 'Opportunities',
        icon: 'bundle',
        links: [
          {
            name: 'Create Opportunity using Outcome-Focused ( ITVM ) approach',
            route: '/sb/create-opportunity/1/itvm'
          },
          {
            name: 'Create Opportunity using Outcome-Focused ( DWJM ) approach',
            route: '/sb/create-opportunity/1/dwjm'
          },
          {
            name: 'Create Opportunity using Individual Product-Focused Services',
            route: '/sb/create-opportunity/2/prdct'
          },
          {
            name: 'Create Opportunity using Packaged Product-Focused Services',
            route: '/sb/create-opportunity/2/prdct'
          },
          // {
          //   name: 'Search for an Existing Opportunity',
          //   route: ''
          // },
          {
            name: 'Edit an Existing Opportunity',
            route: '/sb/all'
          },
          {
            name: 'Share an Existing Opportunity',
            route: '/sb/all'
          },
          {
            name: 'Delete an Existing Opportunity',
            route: '/sb/all'
          },
          {
            name: 'Download a Solution Proposal/SSaD/SoW related to an Existing Opportunity',
            route: '/sb/all'
          },
          {
            name: 'Download Delivery Materials for an Existing Opportunity',
            route: '/sb/all/download'
          },

          {
            name: 'Download Executive Proposal for an Existing Opportunity',
            route: '/sb/all'
          },
          {
            name: 'Download Detailed Proposal for an Existing Opportunity',
            route: '/sb/all'
          },
          {
            name: 'Download Services Scope and Description (SSaD) for an Existing Opportunity',
            route: '/sb/all'
          },
          {
            name: 'Download Fixed Fee SOW for an Existing Opportunity',
            route: '/sb/all'
          },
          {
            name: 'Download Time & Materials SOW for an Existing Opportunity',
            route: '/sb/all'
          },
          {
            name: 'Download Delivery Materials for an Existing Opportunity',
            route: '/sb/all'
          },
          {
            name: 'Download Delivery Materials for non-Solution Builder Opportunity',
            route: '/sb/all'
          },

          {
            name: 'See all Opportunities',
            route: '/sb/all'
          }
        ]
      },
      {
        name: 'Pricing',
        icon: 'dollar',
        links: [
          {
            name: 'Create New Standalone Pricing',
            route: '/pricing/create/1'
          },
          {
            name: 'Create New Pricing for an Existing Opportunity',
            route: '/pricing/create/1'
          },
          {
            name: 'Share Pricing',
            route: '/pricing/all'
          },
          {
            name: 'Delete Pricing',
            route: '/pricing/all'
          },
          {
            name: 'See all Pricings',
            route: '/pricing/all'
          }
        ]
      },
      {
        name: 'Customer Stories',
        icon: 'library',
        links: [
          {
            name: 'Create New Standalone Customer Story',
            route: '/csp/create/1'
          },
          {
            name: 'Create Customer Story for an Existing Opportunity',
            route: '/csp/create/1'
          },
          {
            name: 'Browse all Customer Stories',
            route: '/csp/browse'
          },
          {
            name: 'Share Customer Story',
            route: '/csp/all'
          },
          {
            name: 'Delete Customer Story',
            route: '/csp/all'
          },
          {
            name: 'See all Customer Stories',
            route: '/csp/all'
          }
        ]
      }
    ];
    this.navtiles = this.tiles;

  }

  public get navtitleModeToggle(): boolean {
    return this._navtitleModeToggle;
  }

  public changeNavTiles( tiles: [] ) {
    this.navtiles = tiles;
  }

  public set navtitleModeToggle( state: boolean ) {
    this._navtitleModeToggle = state;

    this.navtiles = state ? this.navtiles2 : this.navtiles1;
  }

  openPicker( picker: any ) {
    // open modal
    this.pckr = picker;
    this.opened = true;
  }

  onModalOpenedStateChanged( $event ) {
    this.opened = $event;
  }

}