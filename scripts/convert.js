#!/usr/bin/env node
/**
 * JLPT 詞表轉換腳本
 * 用途：將開源詞表 CSV 轉換成本站 JSON 格式
 *
 * 使用方式：
 *   node scripts/convert.js <input.csv> <level> [output.json]
 *
 * 範例：
 *   node scripts/convert.js jlpt_n3.csv N3
 *   node scripts/convert.js bluskyo_n2.csv N2 data/vocabulary_N2_new.json
 *
 * 支援的 CSV 格式（自動偵測欄位）：
 *   - Bluskyo/JLPT_Vocabulary：word,reading,meaning,type
 *   - surajsau/JLPT-Resources： vocab|reading|meaning（pipe 分隔）
 *   - 通用格式：第1欄=word, 第2欄=reading, 第3欄=meaning
 *
 * 輸出格式（符合本站 data/vocabulary_Nx.json）：
 *   { word, reading, meaning, romaji, type }
 *   注意：romaji 欄位需人工補充或使用 wanakana 函式庫轉換
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('用法: node scripts/convert.js <input.csv> <level> [output.json]');
  console.log('例如: node scripts/convert.js jlpt_n3.csv N3');
  process.exit(1);
}

const inputFile  = args[0];
const level      = args[1].toUpperCase();
const outputFile = args[2] || `data/vocabulary_${level}_imported.json`;

if (!fs.existsSync(inputFile)) {
  console.error(`找不到檔案：${inputFile}`);
  process.exit(1);
}

const raw = fs.readFileSync(inputFile, 'utf8');
const lines = raw.split('\n').filter(l => l.trim());

// 偵測分隔符
const firstLine = lines[0];
const sep = firstLine.includes('|') ? '|' : firstLine.includes('\t') ? '\t' : ',';

// 跳過標題列
const startIdx = /^[a-zA-Z\u0041-\u007A]/.test(firstLine) && !firstLine.match(/[\u3040-\u30FF\u4E00-\u9FAF]/) ? 1 : 0;

const results = [];

for (let i = startIdx; i < lines.length; i++) {
  const cols = lines[i].split(sep).map(c => c.trim().replace(/^"|"$/g, ''));
  if (cols.length < 2) continue;

  const word    = cols[0] || '';
  const reading = cols[1] || '';
  const meaning = cols[2] || '';
  const type    = cols[3] || '名詞';

  if (!word || !reading) continue;

  results.push({
    word,
    reading,
    meaning,
    romaji: '',   // 請自行補充，或使用 wanakana.toRomaji(reading)
    type: normalizeType(type)
  });
}

function normalizeType(t) {
  const map = {
    'noun': '名詞', 'n': '名詞',
    'verb': '動詞', 'v': '動詞', 'v1': '動詞', 'v5': '動詞',
    'adj': '形容詞', 'i-adj': '形容詞', 'na-adj': '形容動詞',
    'adv': '副詞', 'conj': '接続詞', 'pron': '代名詞',
  };
  const lower = (t || '').toLowerCase().trim();
  return map[lower] || t || '名詞';
}

// 合併或覆蓋現有檔案
if (fs.existsSync(outputFile) && !args[2]) {
  const existing = JSON.parse(fs.readFileSync(outputFile, 'utf8'));
  const existingWords = new Set(existing.map(w => w.word));
  const newWords = results.filter(w => !existingWords.has(w.word));
  const merged = [...existing, ...newWords];
  fs.writeFileSync(outputFile, JSON.stringify(merged, null, 2), 'utf8');
  console.log(`✅ 合併完成：新增 ${newWords.length} 個單字，總計 ${merged.length} 個 → ${outputFile}`);
} else {
  fs.writeFileSync(outputFile, JSON.stringify(results, null, 2), 'utf8');
  console.log(`✅ 轉換完成：${results.length} 個單字 → ${outputFile}`);
}

console.log('⚠️  提醒：romaji 欄位為空，請補充或用 wanakana 函式庫自動轉換');
