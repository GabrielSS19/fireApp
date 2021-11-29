/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../models/Produto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public listaProdutos: Produto[] = [];
  constructor(private prodService: ProdutoService) { }

  ngOnInit() {
    this.buscarProdutos();
  }

  buscarProdutos() {

    this.prodService.buscarProdutos().subscribe(dadosRetorno => {

      this.listaProdutos = dadosRetorno.map(registro => (
        {
          id: registro.payload.doc.id,
          nome: registro.payload.doc.data()['nome'],
          n: registro.payload.doc.data()['n'],
          produto: registro.payload.doc.data()['produtro'],
          defeito: registro.payload.doc.data()['defeito'],
          valor: registro.payload.doc.data()['valor'],
          status: registro.payload.doc.data()['status'],
        }
      ));
    });
  }

  deletarProduto(id: string) {
    this.prodService.deletar(id);
    this.buscarProdutos();
  }
}
