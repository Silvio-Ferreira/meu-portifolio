import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  projetos = [
    { titulo: 'Consulta-CEP', videoUrl: 'assets/vídeos/cep.mp4', githubUrl: 'https://github.com/Silvio-Ferreira/Consulta-CEP' },
    { titulo: 'Quiz', videoUrl: 'assets/vídeos/quiz.mp4', githubUrl: 'https://github.com/Silvio-Ferreira/Angular-BuzzFeed-Quiz',},
    { titulo: 'Blog', videoUrl: 'assets/vídeos/blog.mp4', githubUrl: 'https://github.com/Silvio-Ferreira/angular-blog',},
    { titulo: 'Gerenciador de Contatos', videoUrl: 'assets/vídeos/contatos.mp4', githubUrl: 'https://github.com/Silvio-Ferreira/CSharp-gerenciador-de-contatos',}
    // Adicione mais projetos conforme necessário
  ];
  
  playVideo(event: any): void {
    event.target.play();
  }

  pauseVideo(event: any): void {
    event.target.pause();
  }
}
