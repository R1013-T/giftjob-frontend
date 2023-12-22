'use client'

import Assistant from '@/components/main/ai/mock-interview/message-block/assistant'
import Info from '@/components/main/ai/mock-interview/message-block/info'
import UserInput from '@/components/main/ai/mock-interview/message-block/input'
import { User } from '@/components/main/ai/mock-interview/message-block/user'

export default function MockInterview() {
  return (
    <div className="h-full w-full">
      <div className="h-full w-full relative overflow-y-auto flex flex-col gap-2 text-character pb-32 text-sm px-1">
        <Info
          text="職業「エンジニア」、回数「3回」で、面接を開始します。"
          icon="info"
        />
        <Assistant text="こんにちは、お会いできて光栄です。弊社のソフトウェアエンジニアのポジションに興味を持っていただき、誠にありがとうございます。まず始めに、これまでのソフトウェア開発経験について、特に力を入れたプロジェクトや達成感を感じた課題についてお話しいただけますか？" />
        <User text="学園祭に出展した、タイピングゲームです。タイピングのスピードを競う、Webゲームを開発し、参加した皆さんに遊んでいただきました。" />
        <Assistant text="こんにちは、お会いできて光栄です。弊社のソフトウェアエンジニアのポジションに興味を持っていただき、誠にありがとうございます。まず始めに、これまでのソフトウェア開発経験について、特に力を入れたプロジェクトや達成感を感じた課題についてお話しいただけますか？" />
        <User text="学園祭に出展した、タイピングゲームです。タイピングのスピードを競う、Webゲームを開発し、参加した皆さんに遊んでいただきました。" />
        <Assistant text="こんにちは、お会いできて光栄です。弊社のソフトウェアエンジニアのポジションに興味を持っていただき、誠にありがとうございます。まず始めに、これまでのソフトウェア開発経験について、特に力を入れたプロジェクトや達成感を感じた課題についてお話しいただけますか？" />
        <User text="学園祭に出展した、タイピングゲームです。タイピングのスピードを競う、Webゲームを開発し、参加した皆さんに遊んでいただきました。" />
        <Assistant text="こんにちは、お会いできて光栄です。弊社のソフトウェアエンジニアのポジションに興味を持っていただき、誠にありがとうございます。まず始めに、これまでのソフトウェア開発経験について、特に力を入れたプロジェクトや達成感を感じた課題についてお話しいただけますか？" />
        <div className="text-title text-base">
          <User text="学園祭に出展した、タイピングゲームです。タイピングのスピードを競う、Webゲームを開発し、参加した皆さんに遊んでいただきました。" />
        </div>
        <Info text="質問を生成中です。" icon="loading" />
      </div>

      <UserInput />
    </div>
  )
}
