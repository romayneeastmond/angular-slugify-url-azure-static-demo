import { Component } from '@angular/core';
import slugify from 'slugify';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    websiteUrl: string = '';
    errorWebsiteUrl: boolean = false;
    articleTitle: string = '';
    errorArticleTitle: boolean = false;
    result: string = '';

    constructor() { }

    ngOnInit(): void {

    }

    onSlugify() {
        this.errorWebsiteUrl = false;
        this.errorArticleTitle = false;

        this.websiteUrl = this.websiteUrl.trim();
        this.articleTitle = this.articleTitle.trim();

        if (this.websiteUrl.length === 0) {
            this.errorWebsiteUrl = true;
        } else if (!this.websiteUrl.toLowerCase().startsWith('http')) {
            this.errorWebsiteUrl = true;
        }

        if (this.articleTitle.length === 0) {
            this.errorArticleTitle = true;
        }

        if (!this.errorWebsiteUrl && !this.errorArticleTitle) {
            if (this.websiteUrl[this.websiteUrl.length - 1] !== '/') {
                this.websiteUrl += '/';
            }

            this.result = `${this.websiteUrl}${slugify(this.articleTitle, {
                replacement: '-',
                lower: true,
                strict: true,
                trim: true
            })}`;
        }
    }

    onReset() {
        this.websiteUrl = '';
        this.articleTitle = '';
        this.result = '';
    }
}
