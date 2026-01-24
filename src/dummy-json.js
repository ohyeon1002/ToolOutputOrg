export default {
  meta: {
    version: "1.4.2",
    generated_at: "2023-10-27T10:00:00Z",
    environment: "production",
  },
  user_profile: {
    id: 84922,
    username: "dev_guru",
    preferences: {
      ui_settings: {
        theme: "dracula",
        font_size: 14,
        sidebar_collapsed: false,
      },
      network_config: {
        gateway_details: {
          ipv4: "192.168.1.105",
          subnet_mask: "255.255.255.0",
          performance_tuning: {
            max_packet_size: 1500,
            timeout_ms: 5000,
            advanced_metrics: {
              latency_threshold: 45,
              jitter_buffer: "adaptive",
              packet_loss_tolerance: 0.05,
              encryption_depth: "AES-256",
              handshake_retries: 3,
              keep_alive_interval: 60,
            },
          },
        },
      },
    },
  },
};
