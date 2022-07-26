import  WhiteKingPic  from './assets/white-king.svg'
import  WhiteQueenPic  from './assets/white-queen.svg'
import  WhiteBishopPic  from './assets/white-bishop.svg'
import  WhiteKnightPic  from './assets/white-knight.svg'
import  WhiteRookPic  from './assets/white-rook.svg'
import  WhitePawnPic  from './assets/white-pawn.svg'

import  BlackKingPic  from './assets/black-king.svg'
import  BlackQueenPic  from './assets/black-queen.svg'
import  BlackBishopPic  from './assets/black-bishop.svg'
import  BlackKnightPic  from './assets/black-knight.svg'
import  BlackRookPic  from './assets/black-rook.svg'
import  BlackPawnPic  from './assets/black-pawn.svg'
import { TCells, TPieces, TColumns, TPieceData, TRows, TDeskCell } from './types'

export const piecesArray: Record<Exclude<TPieces, ''>, TPieceData> = {
      whiteKing: {
        asset: WhiteKingPic,
        color: 'white',
        type: 'King',
        firstMove: true,
    },
    whiteQueen: {
        asset: WhiteQueenPic,
        color: 'white',
        type: 'Queen',
        firstMove: true,
    },
    whiteBishop1: {
        asset: WhiteBishopPic,
        color: 'white',
        type: 'Bishop',
        firstMove: true,
    },
    whiteBishop2: {
        asset: WhiteBishopPic,
        color: 'white',
        type: 'Bishop',
        firstMove: true,
    },
    whiteKnight1: {
        asset: WhiteKnightPic,
        color: 'white',
        type: 'Knight',
        firstMove: true,        
    },
    whiteKnight2: {
        asset: WhiteKnightPic,
        color: 'white',
        type: 'Knight',
        firstMove: true,
        
    },
    whiteRook1: {
        asset: WhiteRookPic,
        color: 'white',
        type: 'Rook',
        firstMove: true,
        
    },
    whiteRook2: {
        asset: WhiteRookPic,
        color: 'white',
        type: 'Rook',
        firstMove: true,
        
    },
    whitePawn1: {
        asset: WhitePawnPic,
        color: 'white',
        type: 'Pawn',
        firstMove: true,
        
    },
    whitePawn2: {
        asset: WhitePawnPic,
        color: 'white',
        type: 'Pawn',
        firstMove: true,
        
    },
    whitePawn3: {
        asset: WhitePawnPic,
        color: 'white',
        type: 'Pawn',
        firstMove: true,
        
    },
    whitePawn4: {
        asset: WhitePawnPic,
        color: 'white',
        type: 'Pawn',
        firstMove: true,
        
    },
    whitePawn5: {
        asset: WhitePawnPic,
        color: 'white',
        type: 'Pawn',
        firstMove: true,
        
    },
    whitePawn6: {
        asset: WhitePawnPic,
        color: 'white',
        type: 'Pawn',
        firstMove: true,
        
    },
    whitePawn7: {
        asset: WhitePawnPic,
        color: 'white',
        type: 'Pawn',
        firstMove: true,
        
    },
    whitePawn8: {
        asset: WhitePawnPic,
        color: 'white',
        type: 'Pawn',
        firstMove: true,
    },

    blackKing: {
        asset: BlackKingPic,
        color: 'black',
        type: 'King',
        firstMove: true,
    },
    blackQueen: {
        asset: BlackQueenPic,
        color: 'black',
        type: 'Queen',
        firstMove: true,
    },
    blackBishop1: {
        asset: BlackBishopPic,
        color: 'black',
        type: 'Bishop',
        firstMove: true,
    },
    blackBishop2: {
        asset: BlackBishopPic,
        color: 'black',
        type: 'Bishop',
        firstMove: true,
    },
    blackKnight1: {
        asset: BlackKnightPic,
        color: 'black',
        type: 'Knight',
        firstMove: true,
    },
    blackKnight2: {
        asset: BlackKnightPic,
        color: 'black',
        type: 'Knight',
        firstMove: true,
    },
    blackRook1: {
        asset: BlackRookPic,
        color: 'black',
        type: 'Rook',
        firstMove: true,
    },
    blackRook2: {
        asset: BlackRookPic,
        color: 'black',
        type: 'Rook',
        firstMove: true,
    },
    blackPawn1: {
        asset: BlackPawnPic,
        color: 'black',
        type: 'Pawn',
        firstMove: true,
    },
    blackPawn2: {
        asset: BlackPawnPic,
        color: 'black',
        type: 'Pawn',
        firstMove: true,
        
    },
    blackPawn3: {
        asset: BlackPawnPic,
        color: 'black',
        type: 'Pawn',
        firstMove: true,
        
    },
    blackPawn4: {
        asset: BlackPawnPic,
        color: 'black',
        type: 'Pawn',
        firstMove: true,
        
    },
    blackPawn5: {
        asset: BlackPawnPic,
        color: 'black',
        type: 'Pawn',
        firstMove: true,
        
    },
    blackPawn6: {
        asset: BlackPawnPic,
        color: 'black',
        type: 'Pawn',
        firstMove: true,
        
    },
    blackPawn7: {
        asset: BlackPawnPic,
        color: 'black',
        type: 'Pawn',
        firstMove: true,
        
    },
    blackPawn8: {
        asset: BlackPawnPic,
        color: 'black',
        type: 'Pawn',
        firstMove: true,
        
    },
}

export const defaultPiecesPosition: Record<Exclude<TPieces, ''>, TCells> = {
    whiteKing: 'e1',
    whiteQueen: 'd1',
    whiteBishop1: 'c1',
    whiteBishop2: 'f1', 
    whiteKnight1: 'b1',
    whiteKnight2: 'g1',
    whiteRook1: 'a1',
    whiteRook2: 'h1',
    whitePawn1: 'a2',
    whitePawn2: 'b2',
    whitePawn3: 'c2',
    whitePawn4: 'd2',
    whitePawn5: 'e2',
    whitePawn6: 'f2',
    whitePawn7: 'g2',
    whitePawn8: 'h2',

    blackKing: 'e8',
    blackQueen: 'd8',
    blackBishop1: 'c8',
    blackBishop2: 'f8',
    blackKnight1: 'b8',
    blackKnight2: 'g8',
    blackRook1: 'a8',
    blackRook2: 'h8',
    blackPawn1: 'a7',
    blackPawn2: 'b7',
    blackPawn3: 'c7',
    blackPawn4:'d7',
    blackPawn5:'e7',
    blackPawn6: 'f7',
    blackPawn7: 'g7',
    blackPawn8: 'h7',
}

export const piecesEnum: TPieces[] = [ 
'whiteKing',
'whiteQueen',
'whiteBishop1',
'whiteBishop2',
'whiteKnight1',
'whiteKnight2',
'whiteRook1',
'whiteRook2',
'whitePawn1',
'whitePawn2',
'whitePawn3',
'whitePawn4',
'whitePawn5',
'whitePawn6',
'whitePawn7',
'whitePawn8',
'blackKing',
'blackQueen',
'blackBishop1',
'blackBishop2',
'blackKnight1',
'blackKnight2',
'blackRook1',
'blackRook2',
'blackPawn1',
'blackPawn2',
'blackPawn3',
'blackPawn4',
'blackPawn5',
'blackPawn6',
'blackPawn7',
'blackPawn8'
];

export const columnsLetters: TColumns[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
export const reversedColumnsLetters: TColumns[] = [...columnsLetters].reverse()
export const rowsNumbers: TRows[] = [ 1, 2, 3, 4, 5, 6, 7, 8 ]

export const flattenDesk = (desk: TDeskCell[][]): TDeskCell[]=> {
    let res: TDeskCell[] = []
    desk.forEach(row => res.push(...row))
    return res
}

export const findShortestArrayLength = (arr1:any[], arr2:any[]):number => {
    let minLength = arr1.length;
    if(arr2.length < arr1.length){
        minLength = arr2.length
    }
    return minLength
}