import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateField, setTheme } from './features/cardSlice'
import CardGenerator from './components/template/CardGenerator'
import Layout from './components/layout/Layout'
import { ModeToggle } from "./components/ui/mode-toggle"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Layout>
        <div className="container mx-auto p-8">
          <header className="flex justify-end items-center mb-8">
            <ModeToggle />
          </header>
          <CardGenerator />
        </div>
      </Layout>
    </div>
  )
}

export default App