import { ref } from 'vue'

export function useModal() {
  // state
  const modalRef = ref<HTMLElement | null>(null)
  const showModal = ref(false)
  const modalName = ref('')
  const modalId = ref('') // kita simpan sebagai string biar aman sama mealdb

  // buka modal
  function openModal(nama: string, id?: string | number) {
    modalName.value = nama
    modalId.value = id != null ? String(id) : '' // force jadi string
    showModal.value = true
    document.body.style.overflow = 'hidden' // biar ga bisa scroll pas modal buka
  }

  // tutup modal
  function closeModal() {
    showModal.value = false
    modalName.value = ''
    modalId.value = ''
    document.body.style.overflow = '' // balikin scroll
  }

  // tutup kalau klik ESC
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal()
    })
  }

  return { 
    modalRef, 
    showModal,
    modalName,
    modalId,
    openModal, 
    closeModal 
  }
}