import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conhecimentos',
  templateUrl: './conhecimentos.component.html',
  styleUrl: './conhecimentos.component.css'
})
export class ConhecimentosComponent implements OnInit {
projeto: any;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  conhecimentos = [
    { titulo: 'HTML5', descricao:'HTML5 é uma linguagem de marcação de hipertexto, que usamos para marcar os elementos da página e construí-la.' , ImageUrl: 'assets/conhecimentos/html-1.svg'},
    { titulo: 'CSS3', descricao:'CSS3 é uma linguagem de estilo usada para descrever a apresentação dos elementos da página os estilizando.' , ImageUrl: 'assets/conhecimentos/css-3.svg'},
    { titulo: 'JavaScript', descricao:'JavaScript é uma linguagem de programação interpretada usada no desenvolvimento web para descrever funcionalidades e comportamentos da página.' , ImageUrl: 'assets/conhecimentos/javascript-1.svg'},
    { titulo: 'C#', descricao:'C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET.' , ImageUrl: 'assets/conhecimentos/c--4.svg'},
    { titulo: 'Angular', descricao:'É um framework JavaScript de código aberto mantido pela Google para a construção de SPA (sigla para Single Page Applications ou Aplicações de Página Única).' , ImageUrl: 'assets/conhecimentos/angular-icon-1.svg'},
    { titulo: 'SQL Server', descricao:'O Microsoft SQL Server é um sistema gerenciador de Banco de dados relacional desenvolvido pela Sybase em parceria com a Microsoft.' , ImageUrl: 'assets/conhecimentos/microsoft-sql-server-1.svg'},
    { titulo: 'MongoDB', descricao:'MongoDB é um software de banco de dados classificado como um programa de banco de dados NoSQL.' , ImageUrl: 'assets/conhecimentos/mongodb-icon-2.svg'}
    
     // Adicione mais conhecimentos conforme necessário
  ];
}
