import { Component, EventEmitter, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

interface Column {
  field: string;
  header: string;
}

interface favorite {
  field: string;
  language: string;
  languageCode: string;
}

@Component({
  selector: 'favorites-component',
  imports: [TableModule, CommonModule, ButtonModule],
  standalone: true,
  templateUrl: './favorites-component.component.html',
  styleUrl: './favorites-component.component.scss'
})
export class FavoritesComponentComponent {
  @Output() favoriteToTranslate = new EventEmitter<string[]>();
  cols!: Column[];
  favorites!: favorite[];


  ngOnInit() {
    this.cols = [
      { field: 'number', header: 'Nummer' },
      { field: 'name', header: 'Name' },
    ];
    this.favorites = [
      { field: 'Pizza', language: 'Englisch', languageCode: 'en' },
      { field: 'Pasta', language: 'Englisch', languageCode: 'en' },
      { field: 'Salat', language: 'Englisch', languageCode: 'en' },
      { field: 'Sushi', language: 'Englisch', languageCode: 'en' },
      { field: 'Burger', language: 'Englisch', languageCode: 'en' },

    ];
  }

  deleteFavorite(favorite: favorite) {
    const index = this.favorites.findIndex(fav => fav === favorite);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }

  addFavorite(field: string, language: string, languageCode: string) {
    const newFavorite: favorite = { field: field, language: language, languageCode: languageCode };
    if (this.favorites.length >= 5) {
      alert('You can only add 5 favorites');
      return;
    }
    this.favorites.push(newFavorite);
  }
  editFavorite(favorite: favorite) {
    const index = this.favorites.findIndex(fav => fav === favorite);
    if (index !== -1) {
      this.favorites[index] = favorite;
    }
  }
  translateFavorite(favorite: favorite) {
    const toSend: string[] = [favorite.field, favorite.language, favorite.languageCode];
    this.favoriteToTranslate.emit(toSend);
  }
}
