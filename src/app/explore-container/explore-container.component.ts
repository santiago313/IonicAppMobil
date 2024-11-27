import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;
  @Input() nameBtn?:String
  public actiposSheep = [
    {
      text: 'Ingresar',
      data:{
        action: 'share'
      }
    },
    {
      text:'Cancel',
      role: 'cancel',
      data: {
        action:'cancel'
      }
    }
  ]
}
