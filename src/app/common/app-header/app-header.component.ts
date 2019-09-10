import { Component, OnInit } from '@angular/core';
import { ClarityIcons } from '@clr/icons';
import '@clr/icons/shapes/all-shapes';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor() {
    ClarityIcons.add({"pssb-logo": '<svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><circle id="a" cx="13.7101529" cy="13.7101529" r="13.7101529"/></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><use fill="#367C33" xlink:href="#a"/><path d="M14.8066829 35.4257502l-9.677755 9.6777549-16.8228818-16.8228818 17.393149-17.393149 4.0323979 4.0323979 9.6777549-9.677755 16.8228818 16.8228819-17.3931489 17.393149-4.0323979-4.0323979z" fill="#005C35" opacity=".5" mask="url(#b)"/><path d="M14.7582311 35.4142987L1.9677471 22.6238148l7.7153941-7.7153941 12.7904839 12.7904839-7.715394 7.7153941z" fill="#005C35" opacity=".5" mask="url(#b)"/><rect stroke="#FFF" mask="url(#b)" x="5.1453571" y="15.2263518" width="17.9360712" height="4.6291581" rx="2.314579"/><path d="M5.9656393 15.9382875l4.3169753-4.4459535" stroke="#FFF" stroke-linecap="square" mask="url(#b)"/><path d="M15.7263518 13.7101529c-2.3064791-2.4017666-3.6506118-3.8803125-4.0323979-4.4356377-.5726792-.832988-.4032398-1.6129592-.4032398-2.016199.1344133-.8064796.4032398-1.3441326.8064796-1.6129591l10.3760725 10.5250043" stroke="#FFF" mask="url(#b)"/><circle fill="#FFF" mask="url(#b)" cx="7.6609607" cy="17.5409309" r="1"/><circle fill="#FFF" mask="url(#b)" cx="20.9300603" cy="17.5409309" r="1"/><path d="M15.3756446 9.3060596c-.3000728.2755397-.3799593.5748734-.2396594.8980009.687026.7936015.7645213.8915696 1.3110392 1.3466731.3537579.081724.6336012.0044406.8395298-.2318501l-1.9109096-2.0128239z" fill="#FFF" mask="url(#b)"/></g></svg>'});
  }

  ngOnInit() {
  }

}