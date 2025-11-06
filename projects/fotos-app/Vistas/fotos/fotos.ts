import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { JsonplaceholderService } from '@shared/jsonplaceholder.service'; 
import { Foto } from '@shared/foto.interface'; 
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';   

@Component({
  selector: 'app-fotos',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './fotos.html',
  styleUrls: ['./fotos.css']
})
export class FotosComponent implements OnInit {

  public fotos$!: Observable<Foto[]>;

  constructor(private photoService: JsonplaceholderService) { }

  ngOnInit(): void {
    
    this.fotos$ = this.photoService.getFotos(100, 0)
      .pipe(
        map(fotos => {
          return fotos.map(foto => {
            return {
              ...foto, 
              thumbnailUrl: foto.thumbnailUrl.replace('via.placeholder.com', 'dummyimage.com') 
            } as Foto; 
          });
        })
      );
  }

}