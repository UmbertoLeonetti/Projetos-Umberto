class Pessoa {
    constructor(pNmPessoa, pDtNascimento) {
        this.nmPessoa = pNmPessoa;
        this.dtNascimento = new Date(pDtNascimento);
    }

    getNmPessoa() {
        return this.nmPessoa;
    }
    setNmPessoa(pNmPessoa) {
        this.nmPessoa = pNmPessoa;
    }
    getIdade() {
        var vHoje = new Date();
        return vHoje.getFullYear() - this.dtNascimento.getFullYear();
    }
}

class Aluno extends Pessoa {
    constructor(pNmPessoa, pDtNascimento, pNmCurso) {
        super(pNmPessoa, pDtNascimento);
        this.nmCurso = pNmCurso;
    }

    getNmCurso() {
        return this.nmCurso;
    }
}

class Professor extends Pessoa {
    constructor(pNmPessoa, pDtNascimento, pNmDepto) {
        super(pNmPessoa, pDtNascimento);
        this.nmDepto = pNmDepto;
    }

    getNmDepto() {
        return this.nmDepto;
    }    
}