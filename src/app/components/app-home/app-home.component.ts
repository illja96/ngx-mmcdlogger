import { HttpClientModule } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MarkdownModule, HttpClientModule],
  providers: [
    provideMarkdown(),
  ],
  templateUrl: './app-home.component.html',
  styleUrl: './app-home.component.scss',
  encapsulation: ViewEncapsulation.None
}) export class AppHomeComponent { }
